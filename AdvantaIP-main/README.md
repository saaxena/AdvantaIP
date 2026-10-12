# ADVANTAIP — Website

A full redesign of the ADVANTAIP marketing site, rebuilt from scratch with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS. Professional patent & trademark drawing services.

## Getting started

```bash
npm install
cp .env.example .env.local   # then add your Web3Forms key (see below)
npm run dev                  # http://localhost:9002
```

Other scripts: `npm run build`, `npm run start`, `npm run typecheck`, `npm run lint`.

Requires Node.js 18.18+ (Node 20 or 22 recommended).

## Contact forms (Web3Forms)

The Contact form submit via [Web3Forms](https://web3forms.com) — a free, no-backend form delivery service (the same approach the original site used).

1. Get a free access key at [web3forms.com](https://web3forms.com).
2. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. Restart the dev server.

Without a key, the forms show a clear "not configured yet" message instead of failing silently.

## What's inside

```
src/
  app/                    Routes (App Router)
    page.tsx              Home
    services/             Services listing + /services/[slug] detail pages
    contact/  order/
  components/
    home/                 One component per homepage section
    services/             Example gallery / lightbox
    layout/               Header, Footer
    shared/                Logo, chat widget, WhatsApp FAB, toasts, reveal animations
    ui/                   Button, Accordion, Dialog, Sheet, Select, etc. (Radix-based)
  lib/
    services.ts           All service content — copy, pricing, examples, FAQs
    site.ts                Contact info, nav, stats, site-wide FAQs
    chat-knowledge.ts      Local Q&A knowledge base for the chat assistant
public/images/            Placeholder drawing samples (generic, non-client artwork)
```

All business content (services, pricing, contact details, FAQs) lives in `src/lib/services.ts` and `src/lib/site.ts` — edit those rather than hunting through components.

## Notable decisions

- **Chat assistant** — rebuilt as a local FAQ-matching widget (`src/lib/chat-knowledge.ts`) instead of the original Genkit/Google AI integration, so the site runs immediately with zero API keys or backend setup. Swap in a real model later by replacing `findAnswer()` with an API call.
- **New logo** — the original logo was a low-resolution raster (244×64px). Replaced with a crisp SVG mark (`src/components/shared/logo.tsx`) that scales cleanly at any size.
- **Fonts** — Archivo (display), Inter (body), IBM Plex Mono (labels/figures) via Google Fonts `<link>` tags in `layout.tsx`. Requires normal internet access at runtime to load.
- **Dependencies kept lean** — dropped unused packages from the original (`genkit`, `firebase`, `axios`, `recharts`, `embla-carousel`, `react-day-picker`) that weren't actually referenced anywhere.
- **Security** — pinned to Next.js 16.2.10 / React 19 with an `npm audit`-clean dependency tree (0 vulnerabilities) rather than the vulnerable Next 14 version the audit flagged.

## Design system

Inspired by Stripe, Apple, Perplexity, and OpenAI — but grounded in the subject matter: patent drawings. The recurring motifs are drawn from real patent documents rather than generic SaaS patterns:

- **Palette** — warm paper background, near-black ink, a cobalt "drafting-pen" blue as the primary accent, and a muted gold reserved for seals/certification moments.
- **Numbered field tags** — eyebrows like `(54)` or `(57)` echo the bibliographic data fields on a real patent cover page (Title, Abstract, Applicant, etc.).
- **The hero illustration** — an exploded technical diagram that draws itself in on load (respects `prefers-reduced-motion`), built with Framer Motion path animation rather than a stock image.
- **Portfolio strips** — placeholder drawing samples, captioned like patent figures (`FIG. 01`, `FIG. 02`…).

## Known limitations

- Google Fonts requires the visitor's browser to reach `fonts.googleapis.com`; if you need fully offline/self-hosted fonts, swap the `<link>` tags in `src/app/layout.tsx` for local font files.
- No CMS — content edits mean editing the `.ts` files in `src/lib/`. Ask if you'd like this wired up to a headless CMS instead.
