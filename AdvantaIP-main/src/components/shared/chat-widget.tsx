'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { LogoMark } from '@/components/shared/logo';
import { findAnswer, suggestedQuestions } from '@/lib/chat-knowledge';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

type Message = { id: string; role: 'bot' | 'user'; text: string };

const GREETING =
  "Hi! I'm the ADVANTAIP assistant. Ask me about our drawing services, what to send us, or how to get started.";

export function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    { id: 'greeting', role: 'bot', text: GREETING },
  ]);
  const [input, setInput] = React.useState('');
  const [askedFallback, setAskedFallback] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  function send(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: 'user', text };
    const match = findAnswer(text);
    const botMsg: Message = {
      id: crypto.randomUUID(),
      role: 'bot',
      text: match
        ? match.answer
        : `I don't have that answered here yet — but our team can help directly. Reach us at ${site.email} or use the contact page to request a quote.`,
    };
    if (!match) setAskedFallback(true);
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-lift"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.15 } }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-40 flex h-[min(34rem,calc(100vh-8rem))] w-[min(23rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-lift"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-ink/10 bg-ink px-5 py-4">
              <LogoMark className="h-8 w-8" />
              <div className="flex-1">
                <p className="font-display text-sm font-semibold text-paper">ADVANTAIP Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-paper/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                  Answers instantly
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m) => (
                <div key={m.id} className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}>
                  <div
                    className={cn(
                      'max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.875rem] leading-relaxed',
                      m.role === 'user'
                        ? 'rounded-br-md bg-accent text-white'
                        : 'rounded-bl-md border border-ink/8 bg-white text-ink'
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {askedFallback && (
                <div className="flex flex-col gap-2 pt-1">
                  <Link
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center justify-between rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/30 hover:bg-accent-soft"
                  >
                    Email us
                    <ArrowUpRight className="h-4 w-4 text-graphite-soft" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/30 hover:bg-accent-soft"
                  >
                    Get a Quote
                    <ArrowUpRight className="h-4 w-4 text-graphite-soft" />
                  </Link>
                </div>
              )}

              {messages.length === 1 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-graphite transition-colors hover:border-accent/30 hover:bg-accent-soft hover:text-accent-deep"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-ink/10 bg-white p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                className="h-10 flex-1 rounded-full border border-ink/10 bg-paper px-4 text-sm text-ink placeholder:text-graphite-soft focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-colors hover:bg-accent disabled:opacity-40"
                disabled={!input.trim()}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
