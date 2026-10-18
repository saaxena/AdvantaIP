import { Fragment } from 'react';
import { Lightbulb, Rocket, Cog, FileText, Scale, Building2 } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';

const audiences = [
  { icon: Lightbulb, title: 'Inventors', question: 'Have an idea but only a rough sketch?', text: 'We can help transform your concept into a professional visual representation.' },
  { icon: Rocket, title: 'Startups', question: 'Building a new product or technology?', text: 'We provide professional drawing support as your ideas move toward intellectual property protection.' },
  { icon: Cog, title: 'Engineers & Designers', question: 'Already have technical designs or CAD models?', text: 'We can transform your engineering information into professional IP illustrations.' },
  { icon: FileText, title: 'Patent Professionals', question: 'Need reliable drawing support for your patent work?', text: 'ADVANTAIP provides professional illustration services to support patent documentation.' },
  { icon: Scale, title: 'IP Law Firms', question: '', text: 'Extend your internal capabilities with professional patent and trademark illustration support.' },
  { icon: Building2, title: 'Corporations', question: '', text: 'Support your innovation and IP workflows with consistent technical drawing services.' },
];

export function WhoWeServe() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Supporting Ideas at Every Stage"
          description="ADVANTAIP works with individuals and organizations involved in innovation, product development, and intellectual property."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <RevealItem
              key={a.title}
              className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="absolute right-6 top-6 font-mono text-xs text-graphite-soft">({String.fromCharCode(97 + i)})</span>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent-deep">
                <a.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-ink">
                {a.title.split('&').map((part, i, arr) => (
                  <Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>&amp;</span>}
                  </Fragment>
                ))}
              </h3>
              {a.question && <p className="mt-2 font-display text-[0.95rem] font-semibold text-accent-deep">{a.question}</p>}
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-graphite">{a.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
