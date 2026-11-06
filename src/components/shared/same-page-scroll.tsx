'use client';

import * as React from 'react';

/**
 * Clicking a link that points to the page you are already on ("About" while you are on #about,
 * "Home" while on "/", a service link while on that service page...) normally does nothing.
 * This makes every such link scroll to its target again, site-wide.
 */
export function SamePageScroll() {
  React.useEffect(() => {
    const trim = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || trim(url.pathname) !== trim(window.location.pathname)) return;

      const id = decodeURIComponent(url.hash.slice(1));
      const el = id ? document.getElementById(id) : null;
      if (id && !el) return; // unknown anchor: let the browser / Next handle it

      e.preventDefault(); // stops Next's <Link> from ignoring the "same URL" click; other onClick handlers still run
      const go = () => {
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
      };
      // if the mobile menu is open, give it a moment to close first
      if (document.querySelector('[role="dialog"][data-state="open"]')) window.setTimeout(go, 320);
      else go();
    }

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
