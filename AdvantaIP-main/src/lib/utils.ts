import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a US-style figure/reference tag, e.g. fig(3) -> "FIG. 03" */
export function fig(n: number) {
  return `FIG. ${String(n).padStart(2, '0')}`;
}
