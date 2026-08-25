import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [user, setUser] = useState(null); // { name, email, subscription: true/false, progress: 4 }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // LocalStorage orqali foydalanuvchi sessiyasini saqlash
  useEffect(() => {
    const savedUser = localStorage.getItem('dev_academy_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('dev_academy_user', JSON.stringify(userData));
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('dev_academy_user');
    setActiveTab('landing');
  };

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
        {activeTab === 'courses' && <Courses user={user} setActiveTab={setActiveTab} />}
        {activeTab === 'auth' && <Auth onLogin={handleLogin} setActiveTab={setActiveTab} />}
        {activeTab === 'dashboard' && <Dashboard user={user} setUser={setUser} setActiveTab={setActiveTab} />}
      </main>

      <Footer />
    </div>
  );
}