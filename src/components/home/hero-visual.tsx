'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Leader } from '@/components/home/hero-illustration';

const EASE = [0.65, 0, 0.35, 1] as const;

/** Right-hand photo of the hero: slow drift, animated reference-numeral callouts, handwritten tagline. */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const t = (d: number) => (reduce ? 0 : d);

  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 w-full select-none lg:w-[66%] [mask-image:linear-gradient(to_right,transparent_0%,black_38%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_38%)]"
    >
      <motion.img
        src="/images/hero.jpg"
        alt=""
        className="h-full w-full object-cover object-center"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduce ? 0 : 1.4, ease: EASE }}
      />

      {/* patent-style reference numerals drawn over the photo */}
      <svg viewBox="0 0 804 408" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <Leader path="M150 262 L112 312" cx={104} cy={324} label="10" delay={t(1.3)} stroke="#7CC4FF" fill="#06203F" />
        <Leader path="M312 192 L282 132" cx={276} cy={120} label="20" delay={t(1.45)} stroke="#7CC4FF" fill="#06203F" />
        <Leader path="M428 168 L470 108" cx={478} cy={96} label="30" delay={t(1.6)} stroke="#7CC4FF" fill="#06203F" />
      </svg>

      {/* handwritten tagline */}
      <div className="absolute bottom-[17%] right-[7%] text-right font-hand text-[1.35rem] leading-[1.25] text-white sm:text-[1.7rem]">
        {['Your Ideas.', 'Our Expertise.', 'Your Advantage.'].map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: t(1.9 + i * 0.25), ease: EASE }}
          >
            {line}
          </motion.p>
        ))}
        <svg className="ml-auto mt-1 w-[70%]" height="10" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
          <motion.path
            d="M2 8C50 1 150 1 198 6"
            stroke="#1E90FF"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: reduce ? 0 : 0.8, delay: t(2.8), ease: EASE }}
          />
        </svg>
      </div>
    </div>
  );
}
