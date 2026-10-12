import { Reveal } from '@/components/shared/reveal';
import { FieldTag } from '@/components/shared/section-heading';

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-drafting-grid-dark [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black_0%,transparent_75%)]" />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(184,134,46,0.25), transparent 65%)' }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <FieldTag variant="dark" className="justify-center">
              About ADVANTAIP
            </FieldTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-[2.1rem] font-bold leading-[1.1] tracking-tight text-paper sm:text-[2.6rem] lg:text-[3rem]">
              Where Ideas Take Shape.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 font-display text-lg font-semibold text-paper/85">Every invention starts with an idea.</p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          <Reveal delay={0.18}>
            <div className="h-full rounded-2xl border border-accent-dark/25 bg-accent/[0.08] p-8">
              <h3 className="font-display text-xl font-bold text-accent-dark">From idea to drawing</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/70">
                That idea may begin as a hand-drawn sketch, a CAD model, a photograph, a prototype, or simply a concept in your mind. At ADVANTAIP, we transform those ideas into professional drawings designed to clearly communicate the important visual and technical aspects of your intellectual property.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="h-full rounded-2xl border border-gold/25 bg-gold/[0.06] p-8">
              <h3 className="font-display text-xl font-bold text-gold">Our experience</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/70">
                Our experience in mechanical engineering, CAD design, technical illustration, and patent-related documentation allows us to understand complex concepts and translate them into clear visual representations.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-2xl text-center leading-relaxed text-paper/65">
            Whether you need a single drawing or a complete set of patent illustrations, our focus remains the same:
          </p>
          <p className="mt-3 text-center font-display text-2xl font-bold text-paper sm:text-3xl">
            Accuracy. <span className="text-accent-dark">Clarity.</span> Precision.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
