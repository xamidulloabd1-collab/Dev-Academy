import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Leaderboard from './Leaderboard';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [user, setUser] = useState(null); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('dev_academy_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('dev_academy_user', JSON.stringify(userData));
    // Tizimga kirgach, avtomatik ravishda kurslar sahifasiga o'tkazamiz
    setActiveTab('courses');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('dev_academy_user');
    setActiveTab('auth');
  };

  // QO'SHILDI: Agar foydalanuvchi tizimga kirmagan bo'lsa, faqat Auth oynasi ko'rsatiladi
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center font-sans selection:bg-cyan-500 selection:text-slate-950">
        <Auth onLogin={handleLogin} setActiveTab={setActiveTab} />
      </div>
    );
  }

  // Foydalanuvchi kirgandan keyin ko'rinadigan qism
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        user={user} 
        onLogout={handleLogout}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-grow">
        {activeTab === 'landing' && <Landing setActiveTab={setActiveTab} />}
        {activeTab === 'courses' && <Courses user={user} setUser={setUser} setActiveTab={setActiveTab} />}
        {activeTab === 'dashboard' && <Dashboard user={user} setUser={setUser} setActiveTab={setActiveTab} />}
        {activeTab === 'leaderboard' && <Leaderboard />}
      </main>

      <Footer />
    </div>
  );
}