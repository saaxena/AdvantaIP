import Link from 'next/link';
import { Mail, MapPin, Globe, Linkedin, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/#why', label: 'Why ADVANTAIP' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#01162B] text-paper">
      <div className="pointer-events-none absolute inset-0 bg-drafting-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_0%,transparent_75%)]" />

      <div className="container relative grid grid-cols-2 gap-10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-8">
        <div className="col-span-2 lg:col-span-1">
          <Logo variant="light" markClassName="h-12" />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-paper/60">
            Professional Patent &amp; Trademark Drawing Services
          </p>
          <p className="mt-2 max-w-xs font-mono text-[0.7rem] uppercase tracking-wider text-paper/40">
            Design Patent Drawings | Utility Patent Drawings | Trademark Drawings
          </p>
          {site.social.linkedin && (
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-accent-dark hover:text-accent-dark"
              aria-label="ADVANTAIP on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-paper/40">Quick Links</p>
          <ul className="mt-4 space-y-3 text-[0.95rem] text-paper/70">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-paper">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-paper/40">Services</p>
          <ul className="mt-4 space-y-3 text-[0.95rem] text-paper/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-paper">{s.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-mono text-xs uppercase tracking-wider text-paper/40">Contact</p>
          <p className="mt-4 text-[0.95rem] text-paper/80">Let’s discuss your next project.</p>
          <ul className="mt-4 space-y-3.5 text-[0.95rem] text-paper/70">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-2.5 transition-colors hover:text-paper">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-paper/40" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-paper/40" /> {site.location}
            </li>
            <li className="flex items-start gap-2.5">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-paper/40" /> {site.serving}
            </li>
          </ul>
          <Button asChild variant="accent" size="sm" className="mt-6 bg-[#0A84FF] hover:bg-[#1E6BFF]">
            <Link href="/contact">Request a Quote <ArrowRight className="h-3.5 w-3.5" /></Link>
          </Button>
        </div>
      </div>

      <div className="relative border-t border-paper/10">
        <div className="container flex flex-col gap-3 py-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ADVANTAIP. All Rights Reserved.</p>
          <p className="max-w-xl sm:text-right">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
