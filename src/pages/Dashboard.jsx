import React, { useEffect, useState } from 'react';
import { Trophy, RefreshCw } from 'lucide-react';

const API_URL = "https://backend-chi-six-43.vercel.app/api";

export default function Dashboard({ user, setUser, setActiveTab }) {
  const [leaderboard, setLeaderboard] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);
  const [loading, setLoading] = useState(true);

  // Reyting va statistikani backend'dan tortib kelish
  const fetchStats = async () => {
    try {
      const res = await fetch(`${API_URL}/stats`);
      const data = await res.json();
      setLeaderboard(data.leaderboard || []);
      setTotalStudents(data.totalStudents || 0);
    } catch (err) {
      console.error("Statistikani olishda xatolik:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // Darsni tugatish tugmasi uchun funksiya
  const handleCompleteLesson = async () => {
    try {
      const res = await fetch(`${API_URL}/complete-lesson`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email })
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        localStorage.setItem('dev_academy_user', JSON.stringify(data.user));
        fetchStats(); // Reytingni yangilash
        alert("Tabriklayman! Dars tugatildi va ballar qo'shildi 🎉");
      }
    } catch (err) {
      alert("Xatolik yuz berdi");
    }
  };

  if (!user) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold">Iltimos, oldin tizimga kiring</h2>
        <button 
          onClick={() => setActiveTab('auth')}
          className="bg-cyan-500 text-slate-950 font-bold px-6 py-2.5 rounded-xl">
          Kirish sahifasi
        </button>
      </div>
    );
  }

  // Foydalanuvchining reytingdagi o'rnini aniqlash
  const myIndex = leaderboard.findIndex(u => u.email === user.email);
  const myRank = myIndex !== -1 ? myIndex + 1 : '-';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Profil Header */}
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-black text-slate-950 shadow-lg shadow-cyan-500/20">
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <h2 className="text-2xl font-black">{user.name}</h2>
            <p className="text-xs text-slate-400">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={handleCompleteLesson}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-lg shadow-emerald-500/20">
            + Darsni Tugatish (Test)
          </button>
          <div className={`px-4 py-2 rounded-2xl text-xs font-bold border ${user.subscription ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-amber-500/10 border-amber-500/30 text-amber-400'}`}>
            {user.subscription ? 'PRO Obuna Faol 🌟' : 'Bepul Tarif'}
          </div>
        </div>
      </div>

      {/* Statistika kartochkalari */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2">
          <span className="text-slate-400 text-xs">Bajarilgan darslar</span>
          <div className="text-3xl font-black text-cyan-400">{user.completedLessons || 0} ta</div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-cyan-500 h-full" style={{ width: `${Math.min((user.completedLessons || 0) * 10, 100)}%` }}></div>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2">
          <span className="text-slate-400 text-xs">Reytingdagi o'rin</span>
          <div className="text-3xl font-black text-blue-400">#{myRank}-o'rin</div>
          <span className="text-xs text-slate-500 block">Faollik ballari: {user.points || 0} pts</span>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2">
          <span className="text-slate-400 text-xs">Jami o'quvchilar</span>
          <div className="text-3xl font-black text-indigo-400">{totalStudents} ta</div>
          <span className="text-xs text-slate-500 block">Real bazadagi foydalanuvchilar</span>
        </div>
      </div>

      {/* Reyting Jadvali (Leaderboard) */}
      <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Trophy className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold">O'quvchilar Reytingi</h3>
          </div>
          <button onClick={fetchStats} className="text-slate-400 hover:text-white flex items-center space-x-1 text-xs">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Yangilash</span>
          </button>
        </div>

        {loading ? (
          <div className="text-center py-8 text-slate-500 text-sm">Reyting yuklanmoqda...</div>
        ) : leaderboard.length === 0 ? (
          <div className="text-center py-8 text-slate-500 text-sm">Hozircha o'quvchilar yo'q. Birinchi bo'lib ro'yxatdan o'ting!</div>
        ) : (
          <div className="space-y-3">
            {leaderboard.map((item, index) => {
              const rank = index + 1;
              const isMe = item.email === user.email;
              return (
                <div 
                  key={item.id}
                  className={`p-4 rounded-2xl border flex items-center justify-between ${
                    isMe ? 'bg-cyan-500/10 border-cyan-500/40' : 'bg-slate-950/50 border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${
                      rank === 1 ? 'bg-amber-500 text-slate-950' : rank === 2 ? 'bg-slate-300 text-slate-950' : rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {rank}
                    </span>
                    <span className="text-xl">👨‍💻</span>
                    <div>
                      <h4 className="font-bold text-sm text-slate-200">{item.name} {isMe && "(Siz)"}</h4>
                      <span className="text-xs text-slate-500">Frontend Student</span>
                    </div>
                  </div>

                  <div className="font-extrabold text-cyan-400 text-sm">
                    {item.points} ball
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}