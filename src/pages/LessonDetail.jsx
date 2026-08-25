import React from 'react';
import { ArrowLeft, CheckCircle, BookOpen } from 'lucide-react';

export default function LessonDetail({ lesson, onBack, onComplete }) {
  if (!lesson) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-semibold">
        <ArrowLeft className="w-4 h-4" />
        <span>Darslar ro'yxatiga qaytish</span>
      </button>

      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-2xl">
        <div className="flex items-center space-x-3 text-cyan-400">
          <BookOpen className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-wider">W3Schools Standarti Asosida</span>
        </div>

        <h1 className="text-3xl font-black text-slate-100">{lesson.title}</h1>

        <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4 whitespace-pre-line bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80">
          {lesson.content}
        </div>

        <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
          <span className="text-xs text-slate-400">Darsni o'qib chiqdingizmi?</span>
          <button 
            onClick={() => {
              alert("Tabriklayman! Dars bajarildi deb belgilandi va ballar qo'shildi.");
              onComplete();
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