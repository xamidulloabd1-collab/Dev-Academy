import React from 'react';
import { User, Award, BookOpen, Trophy, CheckCircle } from 'lucide-react';

export default function Dashboard({ user, setActiveTab }) {
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

  // Reyting jadvali namunalari
  const leaderboard = [
    { rank: 1, name: "Jasurbek M.", points: 890, avatar: "👨‍💻" },
    { rank: 2, name: "Madina Karimova", points: 740, avatar: "👩‍💻" },
    { rank: 3, name: "Sardor Ahmedov", points: 680, avatar: "🚀" },
    { rank: 4, name: user.name, points: user.points, avatar: "🔥", isMe: true },
    { rank: 5, name: "Dilshodbek T.", points: 120, avatar: "💻" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Profil Header */}
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-black text-slate-950 shadow-lg shadow-cyan-500/20">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-black">{user.name}</h2>
            <p className="text-xs text-slate-400">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className={`px-4 py-2 rounded-2xl text-xs font-bold border ${user.subscription ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-amber-500/10 border-amber-500/30 text-amber-400'}`}>
            {user.subscription ? 'PRO Obuna Faol 🌟' : 'Bepul Tarif (10ta dars)'}
          </div>
        </div>
      </div>

      {/* Statistika kartochkalari */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2">
          <span className="text-slate-400 text-xs">Bajarilgan darslar</span>
          <div className="text-3xl font-black text-cyan-400">4 / 15</div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-cyan-500 h-full w-[26%]"></div>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2">
          <span className="text-slate-400 text-xs">Reytingdagi o'rin</span>
          <div className="text-3xl font-black text-blue-400">#4-o'rin</div>
          <span className="text-xs text-slate-500 block">Faollik ballari: {user.points} pts</span>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2">
          <span className="text-slate-400 text-xs">Amaliy topshiriqlar</span>
          <div className="text-3xl font-black text-indigo-400">3 ta bajarilgan</div>
          <span className="text-xs text-slate-500 block">Tekshiruvdan o'tgan</span>
        </div>
      </div>

      {/* Reyting Jadvali (Leaderboard) */}
      <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Trophy className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold">O'quvchilar Reytingi</h3>
          </div>
          <span className="text-xs text-slate-400">Har hafta yangilanadi</span>
        </div>

        <div className="space-y-3">
          {leaderboard.map((item) => (
            <div 
              key={item.rank}
              className={`p-4 rounded-2xl border flex items-center justify-between ${
                item.isMe ? 'bg-cyan-500/10 border-cyan-500/40' : 'bg-slate-950/50 border-slate-800/80'
              }`}
            >
              <div className="flex items-center space-x-4">
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${
                  item.rank === 1 ? 'bg-amber-500 text-slate-950' : item.rank === 2 ? 'bg-slate-300 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}>
                  {item.rank}
                </span>
                <span className="text-xl">{item.avatar}</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-200">{item.name} {item.isMe && "(Siz)"}</h4>
                  <span className="text-xs text-slate-500">Frontend Student</span>
                </div>
              </div>

              <div className="font-extrabold text-cyan-400 text-sm">
                {item.points} ball
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}