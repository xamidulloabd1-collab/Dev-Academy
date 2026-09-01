import React from 'react';
import { User, Menu, X } from 'lucide-react';
import logoImg from '../../logo.png'; // Agar logo.png to'g'ridan-to'g'ri src ichida bo'lsa: './logo.png' yoki '../../logo.png'

export default function Navbar({ activeTab, setActiveTab, user, onLogout, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div onClick={() => setActiveTab('landing')} className="flex items-center space-x-3 cursor-pointer group">
          <img 
            src={logoImg} 
            alt="DevAcademy Logo" 
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <button 
            onClick={() => setActiveTab('landing')} 
            className={`transition-colors hover:text-cyan-400 ${activeTab === 'landing' ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>
            Asosiy
          </button>
          <button 
            onClick={() => setActiveTab('courses')} 
            className={`transition-colors hover:text-cyan-400 ${activeTab === 'courses' ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>
            Kurslar
          </button>
          <button 
            onClick={() => setActiveTab('leaderboard')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'leaderboard' 
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                : 'text-slate-400 hover:text-slate-200'
            }`}>
            Reyting 🏆
          </button>
          {user && (
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className={`transition-colors hover:text-cyan-400 ${activeTab === 'dashboard' ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>
              Shaxsiy Kabinet
            </button>
          )}
        </nav>

        {/* Auth / User Profile */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
              <User className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">{user.name}</span>
              <button 
                onClick={onLogout} 
                className="text-xs text-rose-400 hover:underline ml-2">
                Chiqish
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setActiveTab('auth')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-300">
              Kirish / Ro'yxatdan o'tish
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3">
          <button 
            onClick={() => { setActiveTab('landing'); setMobileMenuOpen(false); }} 
            className="block text-slate-300 hover:text-cyan-400 font-medium py-1">
            Asosiy
          </button>
          <button 
            onClick={() => { setActiveTab('courses'); setMobileMenuOpen(false); }} 
            className="block text-slate-300 hover:text-cyan-400 font-medium py-1">
            Kurslar
          </button>
          <button 
            onClick={() => { setActiveTab('leaderboard'); setMobileMenuOpen(false); }} 
            className={`block font-medium py-1 ${activeTab === 'leaderboard' ? 'text-cyan-400 font-bold' : 'text-slate-300 hover:text-cyan-400'}`}>
            Reyting 🏆
          </button>
          {user ? (
            <>
              <button 
                onClick={() => { setActiveTab('dashboard'); setMobileMenuOpen(false); }} 
                className="block text-slate-300 hover:text-cyan-400 font-medium py-1">
                Shaxsiy Kabinet
              </button>
              <button 
                onClick={() => { onLogout(); setMobileMenuOpen(false); }} 
                className="block text-rose-400 font-medium py-1">
                Chiqish
              </button>
            </>
          ) : (
            <button 
              onClick={() => { setActiveTab('auth'); setMobileMenuOpen(false); }} 
              className="w-full bg-cyan-500 text-slate-950 font-bold py-2 rounded-xl text-center">
              Kirish
            </button>
          )}
        </div>
      )}
    </header>
  );
}