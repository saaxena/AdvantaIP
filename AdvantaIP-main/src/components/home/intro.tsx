import { Reveal } from '@/components/shared/reveal';
import { FieldTag } from '@/components/shared/section-heading';

export function Intro() {
  return (
    <section className="relative overflow-hidden border-b border-ink/8 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-drafting-grid [mask-image:radial-gradient(ellipse_70%_100%_at_50%_0%,black_0%,transparent_70%)]" />
      <div className="container relative max-w-3xl text-center">
        <Reveal>
          <FieldTag className="justify-center">Your Idea. Our Expertise. Your Advantage.</FieldTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 text-balance font-display text-[2.1rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-[2.7rem]">
            A great invention deserves to be represented clearly.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 text-lg leading-relaxed text-graphite">
            At ADVANTAIP, we combine technical understanding, engineering knowledge, CAD expertise, and professional illustration skills to create drawings that communicate your invention or design accurately.
          </p>
          <p className="mt-4 font-display text-lg font-semibold text-accent-deep">
            From concept to professional IP drawing — we bring your ideas into focus.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
