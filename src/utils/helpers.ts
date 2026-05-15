/** Joins class names */
export const cn = (...arr: (string | null | undefined)[]) => arr.filter(item => item).join(" ");