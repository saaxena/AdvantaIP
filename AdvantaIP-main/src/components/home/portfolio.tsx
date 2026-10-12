'use client';

import * as React from 'react';
import Image from 'next/image';
import { Expand } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { SectionHeading } from '@/components/shared/section-heading';
import { services } from '@/lib/services';

const rowA = services.flatMap((s) => s.exampleRows[0]?.items ?? []).slice(0, 12);
const rowB = services.flatMap((s) => s.exampleRows[1]?.items ?? s.exampleRows[0]?.items ?? []).slice(0, 12);

function Card({
  image,
  hint,
  onOpen,
}: {
  image: string;
  hint: string;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative h-48 w-64 shrink-0 overflow-hidden rounded-2xl border border-ink/10 bg-white transition-colors hover:border-accent/25 sm:h-56 sm:w-72"
    >
      <div className="relative h-full w-full p-6">
        <Image src={image} alt={hint} fill className="object-contain p-6" unoptimized />
      </div>
      <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/5 group-hover:opacity-100">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-card">
          <Expand className="h-4 w-4 text-ink" />
        </span>
      </span>
    </button>
  );
}

export function Portfolio() {
  const [active, setActive] = React.useState<{ image: string; hint: string } | null>(null);

  return (
    <section className="overflow-hidden py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Sample Drawings"
          title="Complex invention. Clear representation."
          description="From concept to professional IP drawing — we bring your ideas into focus."
        />
      </div>

      <div className="mt-14 flex flex-col gap-5">
        <div className="mask-fade-x flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-5 pr-5 hover:[animation-play-state:paused]">
            {[...rowA, ...rowA].map((item, i) => (
              <Card key={`${item.image}-${i}`} image={item.image} hint={item.hint} onOpen={() => setActive(item)} />
            ))}
          </div>
        </div>
        <div className="mask-fade-x flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee-reverse gap-5 pr-5 hover:[animation-play-state:paused]">
            {[...rowB, ...rowB].map((item, i) => (
              <Card key={`${item.image}-${i}`} image={item.image} hint={item.hint} onOpen={() => setActive(item)} />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl bg-white p-8">
          <DialogTitle className="sr-only">Drawing preview</DialogTitle>
          {active && (
            <div className="relative h-96 w-full">
              <Image src={active.image} alt={active.hint} fill className="object-contain" unoptimized />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
