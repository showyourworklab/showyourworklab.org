

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DpSqHnr9.js","_app/immutable/chunks/scheduler.BBaljRlA.js","_app/immutable/chunks/index.nkUJBPft.js","_app/immutable/chunks/entry.ColYEtc-.js"];
export const stylesheets = [];
export const fonts = [];
