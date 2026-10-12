import { MessageSquare, ShieldCheck, Layers, Shuffle, Users, Globe2 } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';

const reasons = [
  { icon: MessageSquare, title: 'Clear Communication', description: 'We focus on understanding your idea before creating the drawing.' },
  { icon: ShieldCheck, title: 'Technical Accuracy', description: 'Engineering knowledge helps us interpret technical concepts and structures.' },
  { icon: Layers, title: 'Consistent Quality', description: 'We maintain consistency across views, components, line work, and drawing sets.' },
  { icon: Shuffle, title: 'Flexible Inputs', description: 'Start with what you have — even if it’s only a rough sketch.' },
  { icon: Users, title: 'Professional Support', description: 'We work collaboratively with inventors, businesses, and IP professionals.' },
  { icon: Globe2, title: 'Built for Global Clients', description: 'Digital workflows allow us to work with clients and organizations across different locations.' },
];

export function ClientReasons() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Why Clients Choose ADVANTAIP"
          title="Your Innovation Deserves Attention to Detail."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <RevealItem
              key={r.title}
              className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="absolute right-6 top-6 font-mono text-xs text-graphite-soft">({String.fromCharCode(97 + i)})</span>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent-deep">
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{r.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-graphite">{r.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
