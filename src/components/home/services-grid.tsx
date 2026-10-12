import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Cog, PenTool, BadgeCheck } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';
import { services } from '@/lib/services';

const iconBySlug = {
  'design-patent-drawing-services': PenTool,
  'utility-patent-drawing-services': Cog,
  'trademark-patent-drawing-services': BadgeCheck,
} as const;

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Professional Intellectual Property Drawing Services"
            description="We provide specialized drawing services for different types of intellectual property applications and documentation."
            className="max-w-2xl"
          />
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-1.5 font-mono text-sm text-ink transition-colors hover:text-accent"
          >
            View all services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconBySlug[s.slug as keyof typeof iconBySlug];
            return (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/20 hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
<Image src={s.image} alt={s.imageHint} fill className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-105" unoptimized />
</div>

                  <div className="flex flex-1 flex-col p-7">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/8 bg-paper text-ink transition-colors group-hover:border-accent/25 group-hover:bg-accent-soft group-hover:text-accent-deep">
                      <Icon className="h-[1.05rem] w-[1.05rem]" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-ink">{s.title}</h3>
                    <p className="mt-1 font-display text-[0.95rem] font-semibold text-accent-deep">{s.tagline}</p>
                    <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-graphite">{s.description}</p>
                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink/8 pt-5">
                      <span className="text-sm italic text-graphite-soft">{s.closing}</span>
                      <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                        Learn More
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
