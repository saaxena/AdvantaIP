import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Cog, PenTool, BadgeCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';
import { FieldTag } from '@/components/shared/section-heading';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Design patent drawings, utility patent drawings, and trademark drawings — professional intellectual property drawing services by ADVANTAIP.',
};

const iconBySlug = {
  'design-patent-drawing-services': PenTool,
  'utility-patent-drawing-services': Cog,
  'trademark-patent-drawing-services': BadgeCheck,
} as const;

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40 sm:pb-20 sm:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-drafting-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_0%,transparent_70%)]" />
        <div className="container relative max-w-2xl">
          <Reveal>
            <FieldTag>Services</FieldTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-[3.25rem]">
              Professional Intellectual Property Drawing Services
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-graphite">
              We provide specialized drawing services for different types of intellectual property applications and documentation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container">
          <RevealGroup className="grid gap-6 lg:grid-cols-3">
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
                      <h2 className="mt-4 font-display text-xl font-bold text-ink">{s.title}</h2>
                      <p className="mt-1 font-display text-[0.95rem] font-semibold text-accent-deep">{s.tagline}</p>
                      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-graphite">{s.description}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-ink/8 pt-5">
                        <span className="text-sm italic text-graphite-soft">{s.closing}</span>
                        <span className="flex items-center gap-1 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                          Learn More
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <Reveal delay={0.2} className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-ink/10 bg-paper-dim/60 p-10 text-center sm:p-14">
            <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">Have an Idea? Let’s Bring It Into Focus.</h3>
            <p className="max-w-md text-graphite">
              Tell us about your project, provide your available reference material, and let us understand what you need.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                GET A QUOTE <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
