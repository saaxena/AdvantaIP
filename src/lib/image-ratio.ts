import sizes from './image-sizes.json';

const table = sizes as unknown as Record<string, [number, number]>;

/** Width / height of a sample drawing (1 if unknown). */
export function imageRatio(src: string): number {
  const s = table[src];
  return s ? s[0] / s[1] : 1;
}
