import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';
import { FieldTag } from '@/components/shared/section-heading';
import { ZoomableImage } from '@/components/shared/zoom-viewer';
import { ExampleGallery } from '@/components/services/example-gallery';
import { services, getServiceBySlug, getAdjacentServices, serviceIcons, referenceMaterial, principles } from '@/lib/services';
import { whyItems } from '@/lib/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.tagline} ${service.description}`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const { prev, next } = getAdjacentServices(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-4 pt-32 sm:pb-6 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-drafting-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_0%,transparent_70%)]" />
        <div className="container relative">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-graphite-soft">
              <Link href="/services" className="transition-colors hover:text-ink">Services</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-ink">{service.shortTitle}</span>
            </nav>
          </Reveal>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <Reveal delay={0.05}>
                <FieldTag>Service</FieldTag>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 text-balance font-display text-[2.35rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-[3rem]">
                  {service.title}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-graphite">{service.tagline}</p>
              </Reveal>
            </div>

            <Reveal delay={0.15} y={30}>
              <div className="relative aspect-[9/7] overflow-hidden rounded-3xl border border-ink/8 bg-white">
                <div className="absolute inset-3 rounded-2xl bg-dot-grid opacity-40" />
                <ZoomableImage src={service.image} alt={service.imageHint} className="absolute inset-0 h-full w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-20 pt-6">
        <div className="container grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-graphite">{service.description}</p>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <h2 className="font-display text-xl font-bold text-ink">Services may include</h2>
                <ul className="mt-5 space-y-3.5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-graphite">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-xl font-bold text-ink">We can work from</h2>
                <ul className="mt-5 space-y-3.5">
                  {referenceMaterial.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-graphite">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Sticky CTA sidebar */}
          <div className="lg:relative">
            <Reveal delay={0.15} className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-ink/10 bg-[#01162B] p-7 text-paper shadow-card">
                <p className="font-mono text-xs uppercase tracking-wider text-paper/40">ADVANTAIP</p>
                <p className="mt-2 font-display text-2xl font-bold leading-snug">{service.closing}</p>
                <ul className="mt-6 space-y-2.5 border-t border-paper/10 pt-6 text-sm text-paper/70">
                  {principles.map((p) => (
                    <li key={p} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent-dark" /> {p}</li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" variant="accent">
                  <Link href="/contact">Get a Quote <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild className="mt-3 w-full" variant="outline-light">
                  <Link href="/order">Start Your Project</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Examples */}
      {service.exampleRows.length > 0 && (
        <section className="border-y border-ink/8 bg-paper-dim/50 py-20">
          <div className="container">
            <Reveal>
              <FieldTag>Sample Drawings</FieldTag>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Complex invention. Clear representation.</h2>
            </Reveal>
            <div className="mt-12">
              <ExampleGallery rows={service.exampleRows} />
            </div>
          </div>
        </section>
      )}

      {/* Key features */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <FieldTag>Why ADVANTAIP</FieldTag>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">More Than Drawing. We Understand the Idea.</h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2">
            {whyItems.slice(0, 4).map((f) => {
              const Icon = serviceIcons[f.icon];
              return (
                <RevealItem key={f.title} className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">{f.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-graphite">{f.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-ink/8 bg-paper-dim/50 py-20">
        <div className="container max-w-3xl">
          <Reveal>
            <FieldTag>FAQ</FieldTag>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Frequently Asked Questions</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 rounded-3xl border border-ink/10 bg-white px-6 shadow-soft sm:px-10">
            <Accordion type="single" collapsible>
              {service.faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="py-16">
        <div className="container grid gap-4 sm:grid-cols-2">
          <Link
            href={`/services/${prev.slug}`}
            className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-6 transition-colors hover:border-accent/25"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-graphite-soft transition-transform group-hover:-translate-x-1" />
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-graphite-soft">Previous</p>
              <p className="mt-1 font-display font-semibold text-ink">{prev.shortTitle}</p>
            </div>
          </Link>
          <Link
            href={`/services/${next.slug}`}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-white p-6 text-right transition-colors hover:border-accent/25"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-graphite-soft">Next</p>
              <p className="mt-1 font-display font-semibold text-ink">{next.shortTitle}</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-graphite-soft transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
