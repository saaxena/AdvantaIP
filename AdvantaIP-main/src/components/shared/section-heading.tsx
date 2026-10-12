import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/shared/reveal';

/** Small kicker styled like a numbered field on a patent cover page, e.g. "(54)". */
export function FieldTag({
  field,
  children,
  variant = 'light',
  className,
}: {
  field?: string;
  children: ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-[0.95rem] font-medium sm:text-[1.1rem] uppercase tracking-[0.14em]',
        variant === 'light' ? 'text-accent-deep' : 'text-accent-dark',
        className
      )}
    >
      {field && <span className={cn('tabular-nums', variant === 'light' ? 'text-graphite-soft' : 'text-paper/40')}>{field}</span>}
      {children}
    </span>
  );
}

export function SectionHeading({
  field,
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'light',
  className,
  titleClassName,
}: {
  field?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {(field || eyebrow) && (
        <Reveal>
          <FieldTag field={field} variant={variant}>
            {eyebrow}
          </FieldTag>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            'mt-4 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight sm:text-[2.5rem] lg:text-[2.9rem]',
            variant === 'light' ? 'text-ink' : 'text-paper',
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p
            className={cn(
              'mt-4 text-lg leading-relaxed',
              variant === 'light' ? 'text-graphite' : 'text-paper/65'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
