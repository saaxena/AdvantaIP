import { Cog, PenTool, BadgeCheck } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import { HeroVisual } from '@/components/home/hero-visual';

const badges = [
  { icon: PenTool, label: 'Design Patent Drawings' },
  { icon: Cog, label: 'Utility Patent Drawings' },
  { icon: BadgeCheck, label: 'Trademark Drawings' },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#01162B] pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:min-h-[560px]">
      {/* photo, fading into the navy on the left */}
      <div className="absolute inset-0 -z-10 opacity-40 sm:opacity-100">
        <HeroVisual />
        <div className="absolute inset-0 bg-gradient-to-r from-[#01162B] via-[#01162B]/85 to-transparent lg:via-[#01162B]/55 lg:to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-[#01162B] via-[#01162B]/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#01162B]/70 to-transparent" />
      </div>
      {/* original drafting-grid pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-drafting-grid-dark opacity-70 [mask-image:radial-gradient(ellipse_70%_80%_at_20%_40%,black_0%,transparent_75%)]" />

      <div className="container relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/85">
              Professional Patent &amp; Trademark Drawing Services
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance font-display text-[2.3rem] font-bold leading-[1.04] tracking-tight sm:text-[3.4rem] lg:text-[3.9rem]">
              <span className="whitespace-nowrap">Advancing Ideas.</span>
              <br />
              <span className="whitespace-nowrap">Protecting <span className="text-[#1E90FF]">Innovation.</span></span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-white/90">
              We transform inventions, technical concepts, designs, and ideas into clear, precise, and professional intellectual property drawings.
            </p>
            <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-white/65">
              From a simple hand sketch to a detailed CAD model, ADVANTAIP helps inventors, businesses, patent professionals, and IP firms communicate their ideas with confidence.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <ul className="mt-7 flex flex-wrap items-center gap-y-3 text-sm font-medium">
              {badges.map((b, i) => (
                <li key={b.label} className={`flex items-center gap-2 pr-4 ${i > 0 ? 'border-l border-white/25 pl-4' : ''}`}>
                  <b.icon className="h-4 w-4 text-white/80" />
                  {b.label}
                </li>
              ))}
            </ul>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
