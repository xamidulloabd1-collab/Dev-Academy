import React from "react";

/**
 * Button — asosiy CTA komponenti.
 * variant: "primary" | "ghost" | "danger"
 */
export default function Button({
  children,
  variant = "primary",
  className = "",
  as: Component = "button",
  ...props
}) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-display font-semibold text-sm transition-all duration-200 active:translate-y-0 disabled:opacity-40 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-cyan-glow text-base hover:shadow-neon-cyan hover:-translate-y-0.5",
    ghost:
      "border border-white/15 text-ink-primary hover:border-cyan-glow/50 hover:bg-white/5",
    violet:
      "bg-violet-glow text-base hover:shadow-neon-violet hover:-translate-y-0.5",
    danger:
      "border border-red-400/40 text-red-300 hover:bg-red-400/10",
  };

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
