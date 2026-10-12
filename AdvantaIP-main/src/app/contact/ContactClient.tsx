'use client';

import * as React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Globe, Loader2, ArrowRight, ChevronDown, Cog, PenTool, BadgeCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';
import { FieldTag } from '@/components/shared/section-heading';
import { useToast } from '@/hooks/use-toast';
import { submitForm } from '@/lib/forms';
import { site } from '@/lib/site';
import { services } from '@/lib/services';

const contactCards = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Location', value: site.location, href: undefined },
  { icon: Globe, label: 'Service area', value: site.serving, href: undefined },
];

export function ContactClient() {
  const [projectOpen, setProjectOpen] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const result = await submitForm(form, `Contact form: ${form.subject || 'General inquiry'}`);
    setLoading(false);
    toast({
      title: result.ok ? 'Message sent' : "Couldn't send message",
      description: result.message,
      variant: result.ok ? 'success' : 'error',
    });
    if (result.ok) setForm({ name: '', email: '', subject: '', message: '' });
  }

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40 sm:pb-20 sm:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-drafting-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_0%,transparent_70%)]" />
        <div className="container relative max-w-2xl text-center sm:text-left">
          <Reveal>
            <FieldTag className="justify-center sm:justify-start">Contact</FieldTag>
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
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr]">
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
            <form onSubmit={handleSubmit} className="rounded-3xl border border-ink/10 bg-white p-7 shadow-card sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jordan Lee" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="subject">Project</Label>
                <Popover open={projectOpen} onOpenChange={setProjectOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      id="subject"
                      className="flex h-12 w-full items-center justify-between rounded-xl border border-ink/12 bg-white px-4 text-left text-[0.95rem] transition-colors hover:border-accent/25"
                    >
                      <span className={form.subject ? 'text-ink' : 'text-graphite-soft'}>{form.subject || 'Select a project type'}</span>
                      <ChevronDown className="h-4 w-4 text-graphite-soft" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="start" sideOffset={8} className="w-[var(--radix-popover-trigger-width)] min-w-[18rem] p-3">
                    <div className="grid gap-1">
                      {services.map((s) => {
                        const Icon = s.slug.includes('design') ? PenTool : s.slug.includes('utility') ? Cog : BadgeCheck;
                        return (
                          <button
                            key={s.slug}
                            type="button"
                            onClick={() => {
                              setForm({ ...form, subject: s.shortTitle });
                              setProjectOpen(false);
                            }}
                            className="group flex w-full items-start gap-3.5 rounded-xl p-3 text-left transition-colors hover:bg-accent-soft"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink/8 bg-paper text-ink transition-colors group-hover:border-accent/25 group-hover:text-accent-deep">
                              <Icon className="h-[1.1rem] w-[1.1rem]" />
                            </span>
                            <span className="flex-1">
                              <span className="font-display text-[0.95rem] font-semibold text-ink">{s.shortTitle}</span>
                              <span className="mt-0.5 block text-sm text-graphite">{s.tagline}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="message">Project details</Label>
                <Textarea id="message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your invention, design, or mark and the drawings you need…" />
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full" disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Request a Quote <ArrowRight className="h-4 w-4" /></>}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
