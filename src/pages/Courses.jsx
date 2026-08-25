import React, { useState } from 'react';
import { PlayCircle, Lock, CheckCircle, CreditCard, Sparkles, ArrowLeft, BookOpen } from 'lucide-react';

// Darslar ro'yxati va ularning matnli kontenti
const lessons = [
  { id: 1, title: "1-dars: Frontend olamiga kirish va Internet arxitekturasi", free: true, content: "# Frontend Kirish\nFrontend — bu foydalanuvchi veb-saytga kirganda ko'ziga ko'rinadigan va u bilan o'zaro aloqaga kirishadigan qismi. U HTML, CSS va JavaScript texnologiyalariga tayanadi[cite: 2]." },
  { id: 2, title: "2-dars: HTML5 teglari va semantik struktura", free: true, content: "# HTML5 Semantik Tuzilishi\nHTML veb-sahifaning skeletini tashkil qiladi. `<header>`, `<nav>`, `<section>`, `<footer>` kabi semantik teglar kodni o'qishni osonlashtiradi[cite: 2]." },
  { id: 3, title: "3-dars: CSS3 asoslari, ranglar va matnlar bilan ishlash", free: true, content: "# CSS3 Asoslari\nCSS sahifaga dizayn, ranglar va jozibadorlik beradi. Ranglar uchun HEX, RGB va HSL formatlaridan foydalaniladi[cite: 2]." },
  { id: 4, title: "4-dars: CSS Box Model va Display xossalari", free: true, content: "# Box Model\nHar bir HTML element quti hisoblanadi: Content, Padding, Border va Margin qismlaridan iborat[cite: 2]." },
  { id: 5, title: "5-dars: Flexbox layout yordamida mukammal joylashuv", free: true, content: "# Flexbox\nElementlarni bir chiziqda yoki ustma-ust oson tekislash uchun `display: flex;` va `justify-content` xossalari ishlatiladi[cite: 2]." },
  { id: 6, title: "6-dars: CSS Grid tizimi va murakkab setkalar", free: true, content: "# CSS Grid\nMurakkab 2 o'lchamli veb-setkalar va dizaynlar yaratish uchun eng kuchli vosita[cite: 2]." },
  { id: 7, title: "7-dars: Responsive dizayn va Media Queries", free: true, content: "# Responsive Dizayn\nSaytning telefon, planshet va kompyuter ekranlarida bir xildek chiroyli ko'rinishini ta'minlash[cite: 2]." },
  { id: 8, title: "8-dars: Tailwind CSS utilitlari bilan tezkor dizayn", free: true, content: "# Tailwind CSS\nTayyor klasslar yordamida tezkor va zamonaviy veb-interfeyslar yasash freymvorki[cite: 2]." },
  { id: 9, title: "9-dars: Git va GitHub bilan ishlash asoslari", free: true, content: "# Git va GitHub\nKodlarni versiyalash, saqlash va jamoa bo'lib ishlash uchun zaruriy dasturiy vosita[cite: 2]." },
  { id: 10, title: "10-dars: Birinchi real Landing Page loyihasini yasash", free: true, content: "# Landing Page\nOlingan barcha HTML va CSS bilimlarini jamlagan holda ilk mukammal sahifani yaratish[cite: 2]." },
  { id: 11, title: "11-dars: JavaScriptga kirish: O'zgaruvchilar va tiplar", free: false, content: "# JavaScript Asoslari\nVeb-saytga jon bag'ishlovchi til. `let` va `const` yordamida o'zgaruvchilar ochiladi[cite: 2]." },
  { id: 12, title: "12-dars: JS Shart operatorlari va sikllar", free: false, content: "# Shartlar va Sikllar\n`if/else` shartlari va takrorlanuvchi amallarni bajarish uchun sikllar[cite: 2]." },
  { id: 13, title: "13-dars: Funksiyalar va DOM manipulyatsiyasi", free: false, content: "# DOM Bilan Ishlash\nJavaScript yordamida HTML elementlarini o'zgartirish va hodisalarni boshqarish[cite: 2]." },
  { id: 14, title: "14-dars: React.js Asoslari: Komponentlar va Props", free: false, content: "# React Kirish\nZamonaviy Single Page Application (SPA) yaratish uchun eng ommabop kutubxona[cite: 2]." },
  { id: 15, title: "15-dars: React Hooks (useState, useEffect) va API so'rovlar", free: false, content: "# React Hooks\nKomponent ichidagi holatni boshqarish va tashqi serverdan ma'lumotlarni tortib kelish[cite: 2]." },
];

export default function Courses({ user, setActiveTab, onCompleteLesson }) {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Agar dars tanlangan bo'lsa, darsni o'qish oynasini ko'rsatamiz[cite: 3]
  if (selectedLesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <button 
          onClick={() => setSelectedLesson(null)}
          className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" />
          <span>Darslar ro'yxatiga qaytish</span>
        </button>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-2xl">
          <div className="flex items-center space-x-3 text-cyan-400">
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-wider">W3Schools Standarti Asosida</span>
          </div>

          <h1 className="text-3xl font-black text-slate-100">{selectedLesson.title}</h1>

          <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4 whitespace-pre-line bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80">
            {selectedLesson.content}
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
            <span className="text-xs text-slate-400">Darsni o'qib chiqdingizmi?</span>
            <button 
              onClick={() => {
                alert("Tabriklayman! Dars bajarildi deb belgilandi va ballar qo'shildi.");
                if (onCompleteLesson) onCompleteLesson(selectedLesson.id);
                setSelectedLesson(null);
              }}
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all">
              <CheckCircle className="w-5 h-5" />
              <span>Darsni yakunlash</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleLessonClick = (lesson) => {
    if (lesson.free || (user && user.subscription)) {
      setSelectedLesson(lesson); // To'g'ridan-to'g'ri dars sahifasini ochadi[cite: 2]
    } else {
      setShowPaymentModal(true); // Pullik bo'lsa to'lov oynasini chiqaradi[cite: 2]
    }
  };

  const handleSubscribe = () => {
    if (!user) {
      setActiveTab('auth');
      return;
    }
    user.subscription = true;
    setShowPaymentModal(false);
    alert("Tabriklayman! 99,000 so'mlik obuna muvaffaqiyatli faollashtirildi!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black">Frontend Dasturlash Kurslari</h2>
          <p className="text-slate-400 text-sm mt-1">Dastlabki 10 ta dars bepul, qolgan barcha professional darslar oylik obunada[cite: 2].</p>
        </div>
        {user && !user.subscription && (
          <button 
            onClick={() => setShowPaymentModal(true)}
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/20 text-sm flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>PRO Obunani olish (99,000 so'm/oy)</span>
          </button>
        )}
      </div>

      <div className="grid gap-4">
        {lessons.map((lesson) => {
          const isAccessible = lesson.free || (user && user.subscription);
          return (
            <div 
              key={lesson.id}
              onClick={() => handleLessonClick(lesson)}
              className={`p-5 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                isAccessible 
                  ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/50' 
                  : 'bg-slate-900/40 border-slate-900/60 opacity-80'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                  isAccessible ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-800 text-slate-500'
                }`}>
                  {lesson.id}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">{lesson.title}</h4>
                  <span className="text-xs text-slate-500">
                    {lesson.free ? 'Bepul dars' : 'Pullik obuna talab etiladi'}
                  </span>
                </div>
              </div>

              <div>
                {isAccessible ? (
                  <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold bg-cyan-500/10 px-4 py-2 rounded-xl">
                    <PlayCircle className="w-4 h-4" />
                    <span>Ko'rish</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-rose-400 text-xs font-semibold bg-rose-500/10 px-3 py-2 rounded-xl">
                    <Lock className="w-4 h-4" />
                    <span>Qulflangan</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-md w-full space-y-6 shadow-2xl relative">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black">99,000 so'm / oy</h3>
              <p className="text-xs text-slate-400">Click, Payme yoki Uzum Pay orqali tezkor to'lov[cite: 2]</p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={handleSubscribe}
                className="w-full bg-[#00AAFF] hover:bg-[#0092dd] text-slate-950 font-bold py-3.5 rounded-xl transition-all">
                Click orqali to'lash[cite: 2]
              </button>
              <button 
                onClick={handleSubscribe}
                className="w-full bg-[#00E676] hover:bg-[#00c864] text-slate-950 font-bold py-3.5 rounded-xl transition-all">
                Payme orqali to'lash[cite: 2]
              </button>
            </div>

            <button 
              onClick={() => setShowPaymentModal(false)}
              className="w-full text-xs text-slate-500 hover:text-slate-300 pt-2 text-center block">
              Bekor qilish[cite: 2]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}