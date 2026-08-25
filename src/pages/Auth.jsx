import React, { useState } from 'react';
import { Terminal, Lock, Mail, User } from 'lucide-react';

// Vercel'dagi backend manzili
const API_URL = "https://backend-chi-six-43.vercel.app/api";

export default function Auth({ onLogin, setActiveTab }) {
  const [isRegister, setIsRegister] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || (isRegister && !name)) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    setLoading(true);
    try {
      const endpoint = isRegister ? `${API_URL}/register` : `${API_URL}/login`;
      const bodyData = isRegister ? { name, email, password } : { email, password };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Xatolik yuz berdi!");
      }

      // Backenddan kelgan real foydalanuvchi ma'lumotlarini qabul qilamiz
      onLogin(data.user);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30">
            <Terminal className="w-6 h-6 text-slate-950" />
          </div>
          <h2 className="text-2xl font-black">{isRegister ? "A'zo bo'lish" : "Tizimga kirish"}</h2>
          <p className="text-xs text-slate-400">0 dan mukammal darajagacha frontend olamiga kiring</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Ism va Familiya</label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Azizbek Turg'unov" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-10 py-3 text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@gmail.com" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-10 py-3 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Parol</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-10 py-3 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50">
            {loading ? "Yuklanmoqda..." : (isRegister ? "Ro'yxatdan o'tish" : "Kirish")}
          </button>
        </form>

        <div className="text-center text-xs text-slate-400">
          {isRegister ? "Hisobingiz bormi?" : "Hisobingiz yo'qmi?"}{' '}
          <button 
            onClick={() => setIsRegister(!isRegister)} 
            className="text-cyan-400 font-bold hover:underline ml-1">
            {isRegister ? "Kirish" : "Ro'yxatdan o'tish"}
          </button>
        </div>
      </div>
    </div>
  );
}