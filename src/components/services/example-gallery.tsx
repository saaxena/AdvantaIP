'use client';

import * as React from 'react';
import Image from 'next/image';
import { Expand } from 'lucide-react';
import { ImageZoomDialog } from '@/components/shared/zoom-viewer';
import type { ExampleRow } from '@/lib/services';

export function ExampleGallery({ rows }: { rows: ExampleRow[] }) {
  const [active, setActive] = React.useState<{ image: string; hint: string } | null>(null);

  return (
    <div className="flex flex-col gap-12">
      {rows.map((row, idx) => (
        <div key={`${idx}-${row.label}`}>
          {row.label && <h3 className="font-display text-lg font-bold text-ink">{row.label}</h3>}
          <div className={`${row.label ? 'mt-5 ' : ''}grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3`}>
            {row.items.map((item) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setActive(item)}
                className="group relative aspect-[9/7] overflow-hidden rounded-xl border border-ink/10 bg-white transition-colors hover:border-accent/25"
              >
                <Image src={item.image} alt={item.hint} fill className="object-contain p-3" unoptimized />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/5 group-hover:opacity-100">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-card">
                    <Expand className="h-3.5 w-3.5 text-ink" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}

      <ImageZoomDialog item={active} onClose={() => setActive(null)} />
    </div>
  );
}
