'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, ChevronRight, ChevronDown, Cog, PenTool, BadgeCheck, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { services } from '@/lib/services';
import { cn } from '@/lib/utils';

const serviceIcon: Record<string, React.ElementType> = {
  'utility-patent-drawing-services': Cog,
  'design-patent-drawing-services': PenTool,
  'trademark-patent-drawing-services': BadgeCheck,
};

const navBefore = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
];
const navAfter = [
  { href: '/#process', label: 'Process' },
  { href: '/#why', label: 'Why Us' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];
const navItems = [...navBefore, ...navAfter];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-ink/8 bg-white/95 shadow-soft backdrop-blur-lg' : 'border-b border-ink/5 bg-white'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Logo markClassName="h-11" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navBefore.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.92rem] font-medium text-ink/80 transition-colors hover:bg-ink/[0.04] hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Popover open={servicesOpen} onOpenChange={setServicesOpen}>
            <PopoverTrigger asChild>
              <button
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-[0.92rem] font-medium text-ink/80 transition-colors hover:bg-ink/[0.04] hover:text-ink"
              >
                Services <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              onMouseLeave={() => setServicesOpen(false)}
              align="start"
              sideOffset={18}
              className="w-[26rem] p-3"
            >
              <div className="grid gap-1">
                {services.map((s) => {
                  const Icon = serviceIcon[s.slug] ?? Cog;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="group flex items-start gap-3.5 rounded-xl p-3 transition-colors hover:bg-accent-soft"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink/8 bg-paper text-ink transition-colors group-hover:border-accent/25 group-hover:text-accent-deep">
                        <Icon className="h-[1.1rem] w-[1.1rem]" />
                      </span>
                      <span className="flex-1">
                        <span className="flex items-center justify-between">
                          <span className="font-display text-[0.95rem] font-semibold text-ink">{s.shortTitle}</span>
                        </span>
                        <span className="mt-0.5 block text-sm text-graphite">{s.tagline}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-2 border-t border-ink/8 pt-2">
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  className="flex items-center justify-between rounded-xl p-3 text-sm font-medium text-ink transition-colors hover:bg-ink/[0.04]"
                >
                  View all services
                  <ChevronRight className="h-4 w-4 text-graphite-soft" />
                </Link>
              </div>
            </PopoverContent>
          </Popover>

          {navAfter.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.92rem] font-medium text-ink/80 transition-colors hover:bg-ink/[0.04] hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" variant="accent" className="bg-[#0A3D91] hover:bg-[#0A84FF]">
            <Link href="/contact">
              Get a Quote <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="mb-8 mt-1">
              <Logo />
            </div>
            <nav className="flex flex-col gap-1">
              <p className="mb-1 mt-2 font-mono text-xs uppercase tracking-wider text-graphite-soft">Services</p>
              {services.map((s) => (
                <SheetClose asChild key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-[1.05rem] font-medium text-ink hover:bg-ink/[0.04]"
                  >
                    {s.shortTitle}
                    <ChevronRight className="h-4 w-4 text-graphite-soft" />
                  </Link>
                </SheetClose>
              ))}
              <p className="mb-1 mt-5 font-mono text-xs uppercase tracking-wider text-graphite-soft">Menu</p>
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link href={item.href} className="rounded-xl px-3 py-3 text-[1.05rem] font-medium text-ink hover:bg-ink/[0.04]">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <Button asChild variant="accent">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
