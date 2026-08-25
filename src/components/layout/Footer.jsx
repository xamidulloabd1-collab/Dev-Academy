import React from "react";
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-base-soft px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 font-display font-bold text-ink-primary">
          <Code2 size={18} className="text-cyan-glow" />
          KodAkademiya
        </div>
        <p className="font-mono text-xs text-ink-faint">
          0 dan mukammal darajagacha — har bir qator kod bilan.
        </p>
        <p className="font-mono text-xs text-ink-faint">© 2026 KodAkademiya</p>
      </div>
    </footer>
  );
}
