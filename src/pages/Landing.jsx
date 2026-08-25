import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Target, Sparkles } from "lucide-react";
import Button from "../components/ui/Button";
import GlassCard from "../components/ui/GlassCard";
import Badge from "../components/ui/Badge";
import CodeEditorMock from "../components/ui/CodeEditorMock";
import StagePath from "../components/ui/StagePath";

export default function Landing() {
  return (
    <div className="bg-grid bg-grid-fade">
      {/* HERO */}
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 pb-20 pt-16 md:pt-24 lg:flex-row lg:items-center">
        <div className="flex-1 text-center lg:text-left">
          <Badge tone="free">10 ta dars — bepul</Badge>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink-primary md:text-5xl lg:text-6xl">
            0 dan <span className="text-cyan-glow">mukammal</span>
            <br /> frontend dasturchigacha
          </h1>
          <p className="mx-auto mt-5 max-w-lg font-body text-lg text-ink-muted lg:mx-0">
            HTML'ning birinchi tegidan React'dagi ishlaydigan portfolioga qadar —
            amaliy darslar, real topshiriqlar va reyting bilan.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button as={Link} to="/royxatdan-otish" variant="primary" className="w-full sm:w-auto">
              Bepul boshlash <ArrowRight size={16} />
            </Button>
            <Button as="a" href="#dasturlar" variant="ghost" className="w-full sm:w-auto">
              Dasturni ko'rish
            </Button>
          </div>
          <p className="mt-4 font-mono text-xs text-ink-faint">
            Karta talab qilinmaydi · 1–10-darslar to'liq ochiq
          </p>
        </div>

        <div className="flex-1">
          <CodeEditorMock />
        </div>
      </section>

      {/* STAGE PATH */}
      <section id="dasturlar" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">
            O'quv yo'lingiz
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-primary">
            4 bosqich, aniq maqsad
          </h2>
        </div>
        <StagePath completedStageId={-1} />
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <GlassCard glow="cyan">
            <Target className="text-cyan-glow" size={22} />
            <h3 className="mt-4 font-display text-lg font-bold text-ink-primary">
              Amaliy topshiriqlar
            </h3>
            <p className="mt-2 font-body text-sm text-ink-muted">
              Har bir dars oxirida real kod yozib, natijani darhol tekshirasiz.
            </p>
          </GlassCard>
          <GlassCard glow="amber">
            <Trophy className="text-amber-glow" size={22} />
            <h3 className="mt-4 font-display text-lg font-bold text-ink-primary">
              Reyting va ballar
            </h3>
            <p className="mt-2 font-body text-sm text-ink-muted">
              Boshqa o'quvchilar bilan bellashib, motivatsiyangizni saqlang.
            </p>
          </GlassCard>
          <GlassCard glow="violet">
            <Sparkles className="text-violet-glow" size={22} />
            <h3 className="mt-4 font-display text-lg font-bold text-ink-primary">
              Portfolio loyihalar
            </h3>
            <p className="mt-2 font-body text-sm text-ink-muted">
              4-bosqichda ishlaydigan loyihalar bilan intervyuga tayyor bo'ling.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* PRICING */}
      <section id="narxlar" className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">
            Narxlar
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-primary">
            Oddiy, shaffof narx
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="flex flex-col">
            <Badge tone="free">Bepul</Badge>
            <p className="mt-4 font-display text-3xl font-extrabold text-ink-primary">
              0 so'm
            </p>
            <p className="font-body text-sm text-ink-muted">1–10-darslar</p>
            <ul className="mt-6 flex-1 space-y-2 font-body text-sm text-ink-muted">
              <li>✓ HTML/CSS asoslari</li>
              <li>✓ Progress treker</li>
              <li>✓ Boshlang'ich topshiriqlar</li>
            </ul>
            <Button as={Link} to="/royxatdan-otish" variant="ghost" className="mt-6">
              Bepul boshlash
            </Button>
          </GlassCard>
          <GlassCard glow="cyan" className="flex flex-col border-cyan-glow/30">
            <Badge tone="pro">Pro obuna</Badge>
            <p className="mt-4 font-display text-3xl font-extrabold text-ink-primary">
              99 000 so'm<span className="text-base font-normal text-ink-muted">/oy</span>
            </p>
            <p className="font-body text-sm text-ink-muted">11-darsdan — barcha bosqichlar</p>
            <ul className="mt-6 flex-1 space-y-2 font-body text-sm text-ink-muted">
              <li>✓ Professional, Expert, Amaliyot bosqichlari</li>
              <li>✓ Real loyihalar va portfolio</li>
              <li>✓ Reyting jadvalida ishtirok</li>
              <li>✓ Click / Payme / Uzum Pay orqali to'lov</li>
            </ul>
            <Button as={Link} to="/royxatdan-otish" variant="primary" className="mt-6">
              Obuna bo'lish
            </Button>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
