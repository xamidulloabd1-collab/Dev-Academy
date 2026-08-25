import React from "react";
import { Lock, CheckCircle2 } from "lucide-react";

export const STAGES = [
  {
    id: 0,
    nomi: "Nol bosqich",
    mavzu: "HTML, CSS asoslari",
    tone: "mint",
    holat: "bepul",
    darslar: "1–10-darslar",
  },
  {
    id: 1,
    nomi: "Professional",
    mavzu: "Flexbox, Grid, Tailwind, JS & DOM",
    tone: "cyan",
    holat: "obuna",
    darslar: "11–25-darslar",
  },
  {
    id: 2,
    nomi: "Expert",
    mavzu: "React.js, TypeScript, API, Git",
    tone: "violet",
    holat: "obuna",
    darslar: "26–40-darslar",
  },
  {
    id: 3,
    nomi: "Amaliyot",
    mavzu: "Real loyihalar, portfolio, intervyu",
    tone: "amber",
    holat: "obuna",
    darslar: "41–50-darslar",
  },
];

const toneClasses = {
  mint: "border-mint-glow/40 text-mint-glow",
  cyan: "border-cyan-glow/40 text-cyan-glow",
  violet: "border-violet-glow/40 text-violet-glow",
  amber: "border-amber-glow/40 text-amber-glow",
};

export default function StagePath({ completedStageId = -1 }) {
  return (
    <div className="relative flex flex-col gap-6 md:flex-row md:items-stretch md:gap-4">
      {/* connecting line */}
      <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:hidden" />
      {STAGES.map((stage, i) => {
        const isDone = stage.id <= completedStageId;
        return (
          <div key={stage.id} className="flex flex-1 items-center gap-4 md:flex-col md:items-stretch">
            <div
              className={`glass-card flex flex-1 flex-col gap-3 border ${toneClasses[stage.tone]} p-5`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ink-faint">
                  BOSQICH {stage.id}
                </span>
                {stage.holat === "bepul" ? (
                  <CheckCircle2 size={16} className="text-mint-glow" />
                ) : (
                  <Lock size={14} className="text-ink-faint" />
                )}
              </div>
              <h4 className="font-display text-base font-bold text-ink-primary">
                {stage.nomi}
              </h4>
              <p className="font-body text-sm text-ink-muted">{stage.mavzu}</p>
              <span className="font-mono text-xs text-ink-faint">{stage.darslar}</span>
            </div>
            {i < STAGES.length - 1 && (
              <div className="hidden h-px w-6 shrink-0 bg-white/10 md:block" />
            )}
          </div>
        );
      })}
    </div>
  );
}
