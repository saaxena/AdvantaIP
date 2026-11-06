import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border font-mono text-[0.7rem] font-medium uppercase tracking-wider transition-colors',
  {
    variants: {
      variant: {
        default: 'border-ink/10 bg-ink/[0.04] text-ink px-3 py-1',
        accent: 'border-accent/20 bg-accent-soft text-accent-deep px-3 py-1',
        gold: 'border-gold/25 bg-gold-soft text-gold px-3 py-1',
        outline: 'border-ink/15 bg-transparent text-graphite px-3 py-1',
        'outline-light': 'border-paper/25 bg-transparent text-paper/80 px-3 py-1',
        dark: 'border-paper/10 bg-paper/[0.06] text-paper/80 px-3 py-1',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
