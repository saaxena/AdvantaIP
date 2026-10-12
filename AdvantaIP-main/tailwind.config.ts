import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1160px', '2xl': '1280px' },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        hand: ['var(--font-hand)', 'cursive'],
      },
      colors: {
        paper: { DEFAULT: '#FAF9F5', dim: '#F2EFE7', line: '#E7E2D6' },
        ink: { DEFAULT: '#0E1116', soft: '#181D24', muted: '#262D37' },
        graphite: { DEFAULT: '#5B6472', soft: '#8890A0', line: '#20242c' },
        accent: { DEFAULT: '#2F44E0', deep: '#1E2C9E', soft: '#EEF0FD', dark: '#7C8BFF' },
        gold: { DEFAULT: '#B8862E', soft: '#F6EDDA', dark: '#E4B85A' },
        border: '#E7E2D6',
        background: '#FAF9F5',
        foreground: '#0E1116',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      boxShadow: {
        soft: '0 2px 8px 0 rgb(14 17 22 / 0.04), 0 1px 2px 0 rgb(14 17 22 / 0.04)',
        card: '0 8px 24px -8px rgb(14 17 22 / 0.10), 0 2px 6px -2px rgb(14 17 22 / 0.06)',
        lift: '0 24px 48px -12px rgb(14 17 22 / 0.18), 0 4px 12px -4px rgb(14 17 22 / 0.08)',
        gold: '0 8px 30px -6px rgb(184 134 46 / 0.35)',
        accent: '0 12px 32px -8px rgb(47 68 224 / 0.35)',
      },
      backgroundImage: {
        'grid-line': 'linear-gradient(to right, var(--tw-grid-color, rgba(47,68,224,0.07)) 1px, transparent 1px), linear-gradient(to bottom, var(--tw-grid-color, rgba(47,68,224,0.07)) 1px, transparent 1px)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'marquee-reverse': { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        'pulse-dot': { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.35' } },
        draw: { to: { strokeDashoffset: '0' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 32s linear infinite',
        'marquee-reverse': 'marquee-reverse 36s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      transitionTimingFunction: {
        swift: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
