import React from "react";

const TONES = {
  free: "bg-mint-glow/10 text-mint-glow border-mint-glow/30",
  pro: "bg-cyan-glow/10 text-cyan-glow border-cyan-glow/30",
  expert: "bg-violet-glow/10 text-violet-glow border-violet-glow/30",
  practice: "bg-amber-glow/10 text-amber-glow border-amber-glow/30",
  locked: "bg-white/5 text-ink-faint border-white/10",
};

export default function Badge({ tone = "free", children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wide ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
