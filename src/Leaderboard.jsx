import React, { useEffect, useState } from 'react';
import { Trophy, Medal, Award, Users, Star } from 'lucide-react';

const API_URL = "https://backend-chi-six-43.vercel.app/api";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);
  const [loading, setLoading] = useState(true);

  // Backenddan reyting ma'lumotlarini tortib kelish
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${API_URL}/stats`);
        const data = await res.json();
        if (res.ok) {
          setLeaderboard(data.leaderboard);
          setTotalStudents(data.totalStudents);
        }
      } catch (err) {
        console.error("Reytingni yuklashda xatolik:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    // Har 10 sekundda reytingni avtomatik yangilab turish (Jonli reyting uchun)
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    echo: return <div className="text-center py-20 text-slate-400">Reyting yuklanmoqda...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      {/* Sarlavha qismi */}
      <div className="text-center space-y-3">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400 shadow-lg shadow-amber-500/10">
          <Trophy className="w-7 h-7" />
        </div>
        <h2 className="text-3xl font-black text-slate-100">O'quvchilar Jonli Reytingi</h2>
        <p className="text-slate-400 text-sm">
          Platformadagi jami <span className="text-cyan-400 font-bold">{totalStudents}</span> ta o'quvchi orasidan eng faollari! Darslarni tugatib ballaringizni oshiring.
        </p>
      </div>

      {/* Top 3 ta o'quvchi uchun maxsusblok (Agar o'quvchilar bo'lsa) */}
      {leaderboard.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {leaderboard.slice(0, 3).map((student, index) => {
            const badges = [
              { border: "border-amber-500/50 bg-amber-500/10 text-amber-400", icon: <Trophy className="w-6 h-6 text-amber-400" />, rankText: "1-O'rin" },
              { border: "border-slate-400/50 bg-slate-400/10 text-slate-300", icon: <Medal className="w-6 h-6 text-slate-300" />, rankText: "2-O'rin" },
              { border: "border-amber-700/50 bg-amber-700/10 text-amber-600", icon: <Award className="w-6 h-6 text-amber-600" />, rankText: "3-O'rin" },
            ];
            return (
              <div key={student.id || index} className={`p-6 rounded-3xl border ${badges[index].border} backdrop-blur-md flex flex-col items-center text-center space-y-3 shadow-xl relative overflow-hidden`}>
                <div className="absolute top-3 right-3 text-xs font-bold uppercase tracking-wider opacity-60">
                  {badges[index].rankText}
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-inner">
                  {badges[index].icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-100">{student.name}</h3>
                  <p className="text-xs text-slate-400">{student.completedLessons || 0} ta dars tugatilgan</p>
                </div>
                <div className="flex items-center space-x-1 bg-slate-950/60 px-4 py-1.5 rounded-full border border-slate-800 text-cyan-400 font-black text-sm">
                  <Star className="w-4 h-4 fill-cyan-400" />
                  <span>{student.points} ball</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* To'liq jadval */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-slate-200 font-bold">
            <Users className="w-5 h-5 text-cyan-400" />
            <span>Barcha o'quvchilar ro'yxati</span>
          </div>
          <span className="text-xs text-slate-400">Har 10 soniyada yangilanadi</span>
        </div>

        <div className="divide-y divide-slate-800/60">
          {leaderboard.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm">Hozircha o'quvchilar ro'yxati bo'sh. Birinchi bo'lib darsni tugating!</div>
          ) : (
            leaderboard.map((student, index) => (
              <div key={student.id || index} className="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${
                    index === 0 ? 'bg-amber-500 text-slate-950' :
                    index === 1 ? 'bg-slate-300 text-slate-950' :
                    index === 2 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 text-sm sm:text-base">{student.name}</h4>
                    <p className="text-xs text-slate-500">Tugatilgan darslar: {student.completedLessons || 0}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-xl text-cyan-400 font-bold text-xs sm:text-sm">
                  <Star className="w-3.5 h-3.5 fill-cyan-400" />
                  <span>{student.points} ball</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}