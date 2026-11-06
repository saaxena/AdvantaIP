'use client';

import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.65, 0, 0.35, 1] as const;

export function Leader({
  path,
  cx,
  cy,
  label,
  delay,
  stroke = '#2F44E0',
  fill = '#FAF9F5',
}: {
  path: string;
  cx: number;
  cy: number;
  label: string;
  delay: number;
  stroke?: string;
  fill?: string;
}) {
  return (
    <g>
      <motion.path
        d={path}
        stroke={stroke}
        strokeWidth="1.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay, ease: EASE }}
      />
      <motion.circle
        cx={cx}
        cy={cy}
        r="14"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.35, ease: EASE }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <motion.text
        x={cx}
        y={cy + 4}
        fontFamily="var(--font-mono), monospace"
        fontSize="11"
        fill={stroke}
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.55 }}
      >
        {label}
      </motion.text>
    </g>
  );
}

export function HeroIllustration() {
  const reduce = useReducedMotion();
  const d = reduce ? 0 : undefined;

  const shape = (delay: number) => ({
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: { duration: reduce ? 0 : 1.1, delay: d ?? delay, ease: EASE },
  });
  const fade = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: reduce ? 0 : 0.6, delay: d ?? delay },
  });

  return (
    <svg viewBox="0 0 560 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full max-w-[420px]">
      {/* alignment guides */}
      <motion.line x1="180" y1="90" x2="180" y2="520" stroke="#C7CCDA" strokeWidth="1.2" strokeDasharray="4 5" {...fade(0)} />
      <motion.line x1="380" y1="90" x2="380" y2="520" stroke="#C7CCDA" strokeWidth="1.2" strokeDasharray="4 5" {...fade(0.1)} />

      {/* Layer 1 — cap */}
      <motion.rect x="150" y="90" width="260" height="70" rx="30" stroke="#0E1116" strokeWidth="2.4" {...shape(0.2)} />
      <motion.line x1="150" y1="125" x2="410" y2="125" stroke="#0E1116" strokeWidth="1.4" strokeDasharray="2 5" opacity="0.5" {...shape(0.55)} />

      {/* Layer 2 — body */}
      <motion.rect x="130" y="220" width="300" height="150" rx="26" stroke="#0E1116" strokeWidth="2.4" {...shape(0.35)} />
      <motion.circle cx="220" cy="295" r="34" stroke="#0E1116" strokeWidth="2" {...shape(0.75)} />
      <motion.circle cx="220" cy="295" r="14" stroke="#0E1116" strokeWidth="1.6" {...shape(0.9)} />
      <motion.line x1="280" y1="250" x2="390" y2="250" stroke="#0E1116" strokeWidth="1.6" {...shape(0.95)} />
      <motion.line x1="280" y1="270" x2="390" y2="270" stroke="#0E1116" strokeWidth="1.6" {...shape(1)} />
      <motion.line x1="280" y1="290" x2="360" y2="290" stroke="#0E1116" strokeWidth="1.6" {...shape(1.05)} />

      {/* Layer 3 — base */}
      <motion.rect x="160" y="440" width="240" height="46" rx="10" stroke="#0E1116" strokeWidth="2.4" {...shape(0.5)} />
      <motion.line x1="160" y1="463" x2="400" y2="463" stroke="#0E1116" strokeWidth="1.2" strokeDasharray="2 5" opacity="0.5" {...shape(0.85)} />

      {/* feet */}
      <motion.circle cx="185" cy="500" r="6" stroke="#0E1116" strokeWidth="2" {...shape(1.1)} />
      <motion.circle cx="280" cy="500" r="6" stroke="#0E1116" strokeWidth="2" {...shape(1.15)} />
      <motion.circle cx="375" cy="500" r="6" stroke="#0E1116" strokeWidth="2" {...shape(1.2)} />

      {/* reference numerals */}
      <Leader path="M410 122 L470 100" cx={480} cy={96} label="10" delay={1.3} />
      <Leader path="M430 260 L470 230" cx={480} cy={222} label="20" delay={1.42} />
      <Leader path="M254 329 L230 380" cx={222} cy={392} label="21" delay={1.54} />
      <Leader path="M400 460 L465 470" cx={476} cy={472} label="30" delay={1.66} />

      <motion.text x="150" y="560" fontFamily="var(--font-mono), monospace" fontSize="15" letterSpacing="1" fill="#5B6472" {...fade(1.9)}>
        FIG. 1
      </motion.text>
    </svg>
  );
}
