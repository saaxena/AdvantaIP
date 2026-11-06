import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, FileText, Image as ImageIcon, MessageSquareText, Clock3, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';
import { FieldTag } from '@/components/shared/section-heading';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Start Your Project',
  description: 'Tell ADVANTAIP about your project and share your available reference material.',
};

const included = [
  { icon: FileText, text: 'A description of your invention, design, or mark' },
  { icon: ImageIcon, text: 'Sketches, photos, CAD files, existing drawings, or product samples' },
  { icon: MessageSquareText, text: 'The type of drawings you need: design patent, utility patent, or trademark' },
];

export default function OrderPage() {
  return (
    <section className="relative overflow-hidden py-40 sm:py-48">
      <div className="pointer-events-none absolute inset-0 bg-drafting-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_0%,transparent_70%)]" />
      <div className="container relative max-w-2xl text-center">
        <Reveal>
          <FieldTag className="justify-center">Start Your Project</FieldTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-[3.25rem]">
            Share your idea with us.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-graphite">
            Tell us about your project, provide your available reference material, and let us understand what you need.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a href={site.orderFormUrl} target="_blank" rel="noopener noreferrer">
                Start Your Project <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                <PhoneCall className="h-4 w-4" /> Get a Quote
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32} className="mt-16 rounded-3xl border border-ink/10 bg-white p-8 text-left shadow-card sm:p-10">
          <div className="flex items-center gap-2.5">
            <Clock3 className="h-4 w-4 text-accent" />
            <p className="font-mono text-xs uppercase tracking-wider text-graphite-soft">
              Helpful to have ready
            </p>
          </div>
          <RevealGroup className="mt-5 space-y-4">
            {included.map((item) => (
              <RevealItem key={item.text} className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-deep">
                  <item.icon className="h-4 w-4" />
                </span>
                <p className="mt-1.5 text-[0.95rem] text-graphite">{item.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-6 border-t border-ink/8 pt-5 text-sm text-graphite-soft">
            A finished technical drawing is not required to get started.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
