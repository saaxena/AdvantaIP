'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-[100] flex w-full max-w-sm -translate-x-1/2 flex-col gap-3 px-4 sm:bottom-8 sm:left-auto sm:right-8 sm:translate-x-0">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-4 shadow-lift"
          >
            <span
              className={cn(
                'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                t.variant === 'success' && 'bg-emerald-100 text-emerald-600',
                t.variant === 'error' && 'bg-red-100 text-red-600',
                (!t.variant || t.variant === 'default') && 'bg-accent-soft text-accent-deep'
              )}
            >
              {t.variant === 'success' ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : t.variant === 'error' ? (
                <AlertCircle className="h-4 w-4" />
              ) : (
                <Info className="h-4 w-4" />
              )}
            </span>
            <div className="flex-1">
              <p className="font-display text-sm font-semibold text-ink">{t.title}</p>
              {t.description && <p className="mt-0.5 text-sm text-graphite">{t.description}</p>}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              className="rounded-full p-1 text-graphite-soft transition-colors hover:bg-ink/5 hover:text-ink"
              aria-label="Dismiss notification"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
