import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { FieldTag } from '@/components/shared/section-heading';

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[#01162B]" />
      <div className="pointer-events-none absolute inset-0 bg-drafting-grid-dark opacity-70" />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(47,68,224,0.35), transparent 65%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(184,134,46,0.3), transparent 65%)' }}
      />

      <div className="container relative text-center">
        <Reveal>
          <FieldTag variant="dark" className="justify-center">
            Get Started
          </FieldTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-paper sm:text-[3.4rem] lg:text-[4rem]">
            Have an Idea? Let’s Bring It Into Focus.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mx-auto mt-6 max-w-xl space-y-1 leading-relaxed text-paper/65">
            <p>Your invention may begin with a sketch.</p>
            <p>Your design may begin with a concept.</p>
            <p>Your next innovation may begin with a thought.</p>
            <p className="pt-3 text-paper/85">ADVANTAIP can help turn that idea into a professional visual representation.</p>
          </div>
          <p className="mx-auto mt-6 max-w-xl font-display text-lg font-semibold text-paper">Share your idea with us.</p>
          <p className="mx-auto mt-1 max-w-xl text-paper/60">
            Tell us about your project, provide your available reference material, and let us understand what you need.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">
                GET A QUOTE <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link href="/order">START YOUR PROJECT</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-16 max-w-2xl border-t border-paper/10 pt-10">
            <p className="font-display text-2xl font-bold text-paper sm:text-3xl">
              Your Ideas. <span className="text-accent-dark">Our Expertise.</span> Your Advantage.
            </p>
            <p className="mt-4 text-paper/60">
              At ADVANTAIP, we believe every great innovation begins with an idea. Our job is to help you visualize it, communicate it, and represent it professionally.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-paper/45">Advancing Ideas. Protecting Innovation.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
