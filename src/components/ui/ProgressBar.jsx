import React from "react";

export default function ProgressBar({ percent = 0, tone = "cyan", label }) {
  const toneMap = {
    cyan: "bg-cyan-glow",
    violet: "bg-violet-glow",
    amber: "bg-amber-glow",
    mint: "bg-mint-glow",
  };

  return (
    <div className="w-full">
      {label && (
        <div className="mb-1.5 flex items-center justify-between font-mono text-xs text-ink-muted">
          <span>{label}</span>
          <span>{percent}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className={`h-full rounded-full ${toneMap[tone]} transition-all duration-700 ease-out`}
          style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
        />
      </div>
    </div>
  );
}
