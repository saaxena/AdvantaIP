import * as React from 'react';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-32 w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-graphite-soft transition-colors duration-200',
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
Textarea.displayName = 'Textarea';

export { Textarea };
