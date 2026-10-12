import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/** ADVANTAIP "A" mark — solid A with a light-blue swoosh cutting through it. */
export function LogoMark({ className, variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const uid = React.useId().replace(/:/g, '');
  const body = `ai-body-${uid}`;
  const swoosh = `ai-swoosh-${uid}`;
  return (
    <svg viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('h-10 w-auto', className)} aria-hidden="true">
      <defs>
        <linearGradient id={body} x1="6" y1="60" x2="40" y2="4" gradientUnits="userSpaceOnUse">
          {variant === 'dark' ? (
            <>
              <stop offset="0" stopColor="#0B2A66" />
              <stop offset="1" stopColor="#1F5FBF" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#DCE8FF" />
              <stop offset="1" stopColor="#FFFFFF" />
            </>
          )}
        </linearGradient>
        <linearGradient id={swoosh} x1="8" y1="52" x2="70" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1E6BFF" />
          <stop offset="1" stopColor="#3FA9FF" />
        </linearGradient>
      </defs>
      {/* A body */}
      <path fillRule="evenodd" clipRule="evenodd" fill={`url(#${body})`} d="M2 60 L23.5 4 H35.5 L50 60 H38 L34.6 46 H23.4 L18 60 Z M29.6 17.5 L24.6 35 H32.6 Z" />
      {/* swoosh */}
      <path fill={`url(#${swoosh})`} d="M6 54 C20 36 44 34 64 18 C68 15 71 15 71 15 C64 24 52 34 38 42 C28 48 16 52 6 54 Z" />
      <path fill={`url(#${swoosh})`} opacity="0.85" d="M52 22 C57 18 63 16 68 14 C63 18 58 22 53 25 Z" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  variant = 'dark',
  showTagline = true,
}: {
  className?: string;
  markClassName?: string;
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}) {
  const dark = variant === 'dark';
  return (
    <Link href="/" className={cn('group inline-flex items-center gap-2', className)} aria-label="ADVANTAIP — home">
      <LogoMark variant={variant} className={cn('shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5', markClassName)} />
      <span className="flex flex-col leading-none">
        <span className={cn('font-display text-[1.5rem] font-semibold tracking-[0.06em]', dark ? 'text-[#0A1F44]' : 'text-white')}>
          ADVANTA<span className={dark ? 'text-[#1E6BFF]' : 'text-[#3FA9FF]'}>IP</span>
        </span>
        {showTagline && (
          <span className={cn('mt-1.5 text-[0.62rem] font-medium tracking-[0.01em]', dark ? 'text-[#0A1F44]/80' : 'text-white/75')}>
            Advancing Ideas. Protecting Innovation.
          </span>
        )}
      </span>
    </Link>
  );
}
