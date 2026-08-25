import React from "react";

/**
 * Hero'ning imzo elementi: brauzer/editor oynasi ko'rinishida
 * kod satrlari va ular "chizadigan" mini interfeys.
 * Sof CSS animatsiya (typing effect) — reduced-motion'ga hurmat bilan.
 */
export default function CodeEditorMock() {
  return (
    <div className="glass-card w-full max-w-xl overflow-hidden p-0 shadow-neon-cyan/20">
      {/* Editor chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-glow/70" />
        <span className="h-3 w-3 rounded-full bg-mint-glow/70" />
        <span className="ml-3 font-mono text-xs text-ink-faint">1-dars.html</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Code side */}
        <div className="border-b border-white/10 p-5 font-mono text-[13px] leading-relaxed md:border-b-0 md:border-r">
          <p className="text-ink-faint">1 &nbsp;<span className="text-violet-glow">&lt;div</span> <span className="text-cyan-glow">class</span>=<span className="text-amber-glow">"card"</span><span className="text-violet-glow">&gt;</span></p>
          <p className="text-ink-faint">2 &nbsp;&nbsp;<span className="text-violet-glow">&lt;h1&gt;</span><span className="text-ink-primary">Salom, Frontend!</span><span className="text-violet-glow">&lt;/h1&gt;</span></p>
          <p className="text-ink-faint">3 &nbsp;&nbsp;<span className="text-violet-glow">&lt;p&gt;</span><span className="text-ink-primary">Birinchi loyihangiz.</span><span className="text-violet-glow">&lt;/p&gt;</span></p>
          <p className="text-ink-faint">4 &nbsp;<span className="text-violet-glow">&lt;/div&gt;</span></p>
          <p className="mt-2 inline-block w-2 animate-blink bg-cyan-glow align-middle text-transparent">|</p>
        </div>

        {/* Live render side */}
        <div className="flex items-center justify-center bg-base-soft p-6">
          <div className="w-full rounded-xl border border-white/10 bg-base p-4 text-center shadow-neon-cyan/10">
            <h3 className="font-display text-lg font-bold text-ink-primary">Salom, Frontend!</h3>
            <p className="mt-1 font-body text-sm text-ink-muted">Birinchi loyihangiz.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
