import Link from 'next/link';
import { ArrowRight, FileSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FieldTag } from '@/components/shared/section-heading';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-drafting-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_0%,transparent_70%)]" />
      <div className="container relative text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-ink/10 bg-white shadow-card">
          <FileSearch className="h-7 w-7 text-accent" />
        </span>
        <div className="mt-6 flex justify-center">
          <FieldTag>Page Not Found</FieldTag>
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">This figure wasn't filed.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-graphite">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
