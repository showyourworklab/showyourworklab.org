

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CvriWvSB.js","_app/immutable/chunks/scheduler.D0URV7Fd.js","_app/immutable/chunks/index.CNC0Sm3a.js","_app/immutable/chunks/constants.KVdP-Q1j.js"];
export const stylesheets = ["_app/immutable/assets/2.CDzjoF8S.css"];
export const fonts = [];
