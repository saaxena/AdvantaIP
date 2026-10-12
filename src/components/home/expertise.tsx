import { Cog, Box, PencilRuler, FileText, BadgeCheck } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';

const items = [
  { icon: Cog, title: 'Mechanical Engineering', description: 'Understanding machines, components, mechanisms, and assemblies.' },
  { icon: Box, title: 'CAD & 3D Design', description: 'Working with technical drawings and 2D/3D design concepts.' },
  { icon: PencilRuler, title: 'Technical Illustration', description: 'Transforming complex technical information into understandable visual representations.' },
  { icon: FileText, title: 'Patent Illustration', description: 'Creating professional drawings for patent-related documentation.' },
  { icon: BadgeCheck, title: 'Trademark Illustration', description: 'Representing visual marks, products, and brand elements clearly.' },
];

export function Expertise() {
  return (
    <section className="border-y border-ink/8 bg-paper-dim/50 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Engineering Meets Intellectual Property"
          description="Our strength comes from combining multiple areas of technical expertise."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((r, i) => (
            <RevealItem
              key={r.title}
              className={`group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card lg:col-span-2 ${i >= 3 ? 'lg:col-span-3' : ''}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{r.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-graphite">{r.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center font-display text-lg font-semibold text-accent-deep">
            One idea. Multiple possibilities. One professional drawing partner.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
