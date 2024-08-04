

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.oqvLtHbE.js","_app/immutable/chunks/scheduler.BBaljRlA.js","_app/immutable/chunks/index.nkUJBPft.js","_app/immutable/chunks/constants.aT1qBy2V.js"];
export const stylesheets = ["_app/immutable/assets/2.lg8CM9xD.css"];
export const fonts = [];
