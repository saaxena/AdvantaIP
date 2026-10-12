import { Cog, Target, PencilRuler, BadgeCheck, Handshake, Globe } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';
import { whyItems } from '@/lib/site';

const icons = { Cog, Target, PencilRuler, BadgeCheck, Handshake, Globe };

export function WhyChooseUs() {
  return (
    <section id="why" className="scroll-mt-20 border-y border-ink/8 bg-paper-dim/50 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Why ADVANTAIP"
          title="More Than Drawing. We Understand the Idea."
          description="Creating an IP drawing is not simply about putting lines on a page. The illustrator needs to understand what the invention is, how its components relate to each other, and which features need to be clearly represented. That’s where ADVANTAIP makes a difference."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((f) => {
            const Icon = icons[f.icon];
            return (
              <RevealItem key={f.title} className="group bg-paper p-8 transition-colors hover:bg-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/8 bg-white text-accent transition-colors group-hover:border-accent/25 group-hover:bg-accent-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-ink">{f.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-graphite">{f.description}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
