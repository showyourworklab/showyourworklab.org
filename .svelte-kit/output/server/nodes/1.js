

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.pU9RL-Hb.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.C3aWS7UM.js","_app/immutable/chunks/entry.CxLOZMQ_.js"];
export const stylesheets = [];
export const fonts = [];
