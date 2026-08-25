import React from "react";

export default function GlassCard({ children, className = "", glow = null, ...props }) {
  const glowMap = {
    cyan: "hover:shadow-neon-cyan hover:border-cyan-glow/40",
    violet: "hover:shadow-neon-violet hover:border-violet-glow/40",
    amber: "hover:shadow-neon-amber hover:border-amber-glow/40",
  };

  return (
    <div
      className={`glass-card p-6 transition-all duration-300 ${
        glow ? glowMap[glow] : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
