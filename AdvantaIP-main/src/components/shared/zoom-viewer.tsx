'use client';

import * as React from 'react';
import Image from 'next/image';
import { Expand, Minus, Plus, RotateCcw } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { imageRatio } from '@/lib/image-ratio';

export type ZoomItem = { image: string; hint: string };

const btn =
  'flex h-9 w-9 items-center justify-center rounded-full border border-ink/12 bg-white text-ink transition-colors hover:bg-accent-soft disabled:opacity-40 disabled:hover:bg-white';

/** Large drawing viewer: zoom buttons, click-to-zoom, scroll to pan. */
export function ImageZoomDialog({ item, onClose }: { item: ZoomItem | null; onClose: () => void }) {
  const [zoom, setZoom] = React.useState(1);
  React.useEffect(() => setZoom(1), [item]);
  const ratio = item ? imageRatio(item.image) : 1;
  const set = (z: number) => setZoom(Math.min(4, Math.max(1, Math.round(z * 100) / 100)));

  return (
    <Dialog open={!!item} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="w-fit max-w-[96vw] gap-3 bg-white p-3 sm:p-4">
        <DialogTitle className="sr-only">Drawing preview</DialogTitle>
        {item && (
          <>
            <div className="flex items-center gap-2 pr-8">
              <button type="button" aria-label="Zoom out" className={btn} disabled={zoom <= 1} onClick={() => set(zoom - 0.5)}>
                <Minus className="h-4 w-4" />
              </button>
              <button type="button" aria-label="Zoom in" className={btn} disabled={zoom >= 4} onClick={() => set(zoom + 0.5)}>
                <Plus className="h-4 w-4" />
              </button>
              <button type="button" aria-label="Reset zoom" className={btn} disabled={zoom === 1} onClick={() => set(1)}>
                <RotateCcw className="h-4 w-4" />
              </button>
              <span className="ml-1 font-mono text-xs text-graphite-soft">{Math.round(zoom * 100)}%</span>
            </div>
            <div
              className="overflow-auto rounded-lg ring-1 ring-ink/10"
              style={{ width: `min(88vw, ${78 * ratio}vh)`, maxHeight: '78vh' }}
            >
              <div
                className={cn('relative', zoom > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in')}
                style={{ width: `${zoom * 100}%`, aspectRatio: ratio }}
                onClick={() => set(zoom > 1 ? 1 : 2)}
              >
                <Image src={item.image} alt={item.hint} fill className="object-cover" unoptimized />
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

/** Image that fills its box and opens the zoom viewer on click. */
export function ZoomableImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [open, setOpen] = React.useState<ZoomItem | null>(null);
  return (
    <>
      <button
        type="button"
        aria-label={`Zoom: ${alt}`}
        onClick={() => setOpen({ image: src, hint: alt })}
        className={cn('relative block cursor-zoom-in', className)}
      >
        <Image src={src} alt={alt} fill className="object-contain" unoptimized />
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-ink/10">
          <Expand className="h-4 w-4 text-ink" />
        </span>
      </button>
      <ImageZoomDialog item={open} onClose={() => setOpen(null)} />
    </>
  );
}
