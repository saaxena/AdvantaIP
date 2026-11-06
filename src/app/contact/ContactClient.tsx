'use client';

import { Mail, MapPin, Globe } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';
import { FieldTag } from '@/components/shared/section-heading';
import { site } from '@/lib/site';

// Microsoft Form shown in the contact section
const FORM_URL = 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__70PPfFUMVE3Vlo4Q1NLUE0zTzdRVUI1Vk1TUkdGTi4u';

const contactCards = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Location', value: site.location, href: undefined },
  { icon: Globe, label: 'Service area', value: site.serving, href: undefined },
];

export function ContactClient() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40 sm:pb-20 sm:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-drafting-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_0%,transparent_70%)]" />
        <div className="container relative">
          <div className="max-w-2xl">
          <Reveal>
            <FieldTag>Contact</FieldTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-[3.25rem]">
              Let’s discuss your next project.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-graphite">
              Tell us about your project, provide your available reference material, and let us understand what you need.
            </p>
          </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <RevealGroup className="flex flex-col gap-4">
              {contactCards.map((c) => (
                <RevealItem key={c.label}>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="group flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-6 transition-colors hover:border-accent/25">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-graphite-soft">{c.label}</p>
                        <p className="mt-1 font-display font-semibold text-ink">{c.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-6">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-deep">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-graphite-soft">{c.label}</p>
                        <p className="mt-1 font-display font-semibold text-ink">{c.value}</p>
                      </div>
                    </div>
                  )}
                </RevealItem>
              ))}

            </RevealGroup>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card">
              <iframe
                title="Contact ADVANTAIP — request a quote"
                src={`${FORM_URL}&embed=true`}
                loading="lazy"
                allowFullScreen
                className="block h-[780px] w-full border-0 sm:h-[820px]"
              />
            </div>
            <p className="mt-3 text-center text-sm text-graphite-soft">
              Form not loading?{' '}
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-accent-deep underline-offset-4 hover:underline">
                Open it in a new tab
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
