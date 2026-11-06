import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/** Emblem only (used where a small mark is needed, e.g. the chat widget). */
export function LogoMark({ className }: { className?: string; variant?: 'dark' | 'light' }) {
  return <Image src="/images/logo-mark.png" alt="" width={379} height={281} aria-hidden="true" unoptimized className={cn('h-10 w-auto object-contain', className)} />;
}

/** Full ADVANTAIP logo. On dark backgrounds (variant="light") it sits on a white plate. */
export function Logo({
  className,
  markClassName,
  variant = 'dark',
}: {
  className?: string;
  markClassName?: string;
  variant?: 'dark' | 'light';
}) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center', variant === 'light' && 'rounded-xl bg-white px-3.5 py-2.5', className)}
      aria-label="ADVANTAIP — home"
    >
      <Image
        src="/images/logo.png"
        alt="ADVANTAIP — Advancing Ideas. Protecting Innovation."
        width={1135}
        height={293}
        priority
        unoptimized
        className={cn('h-11 w-auto shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5', markClassName)}
      />
    </Link>
  );
}
