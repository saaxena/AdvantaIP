import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ChatWidget } from '@/components/shared/chat-widget';
import { Toaster } from '@/components/shared/toaster';
import { ToastProvider } from '@/hooks/use-toast';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Professional Patent & Trademark Drawing Services`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'patent drawing services',
    'design patent drawings',
    'utility patent drawings',
    'trademark drawings',
    'IP drawings',
    'patent illustrations',
  ],
  openGraph: {
    title: `${site.name} — Professional Patent & Trademark Drawing Services`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Professional Patent & Trademark Drawing Services`,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Caveat:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen"
        style={{
          // @ts-expect-error -- custom properties
          '--font-display': "'Archivo', system-ui, sans-serif",
          '--font-body': "'Inter', system-ui, sans-serif",
          '--font-mono': "'IBM Plex Mono', ui-monospace, monospace",
          '--font-hand': "'Caveat', cursive",
        }}
      >
        <ToastProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  );
}
