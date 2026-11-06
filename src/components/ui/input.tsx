import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-xl border border-ink/12 bg-white px-4 py-2 text-[0.95rem] text-ink placeholder:text-graphite-soft transition-colors duration-200',
          'focus-visible:outline-none focus-visible:border-accent focus-visible:ring-4 focus-visible:ring-accent/10',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
