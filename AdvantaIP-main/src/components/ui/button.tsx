import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 ease-swift disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
  {
    variants: {
      variant: {
        primary:
          'rounded-full bg-ink text-paper shadow-card hover:bg-accent hover:shadow-accent hover:-translate-y-0.5 active:translate-y-0',
        accent:
          'rounded-full bg-accent text-white shadow-accent hover:bg-accent-deep hover:-translate-y-0.5 active:translate-y-0',
        outline:
          'rounded-full border border-ink/15 bg-transparent text-ink hover:border-ink/30 hover:bg-ink/[0.03] active:bg-ink/[0.06]',
        'outline-light':
          'rounded-full border border-paper/25 bg-transparent text-paper hover:border-paper/50 hover:bg-paper/10',
        ghost: 'rounded-full text-ink hover:bg-ink/[0.05] active:bg-ink/[0.08]',
        link: 'text-ink underline-offset-4 hover:text-accent p-0 h-auto',
      },
      size: {
        default: 'h-12 px-6 text-[0.95rem]',
        sm: 'h-10 px-5 text-sm',
        lg: 'h-14 px-8 text-base',
        icon: 'h-11 w-11 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
