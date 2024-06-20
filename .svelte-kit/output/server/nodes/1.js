

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DYU9li17.js","_app/immutable/chunks/scheduler.Bu5GJ83t.js","_app/immutable/chunks/index.CXDde0gU.js","_app/immutable/chunks/entry.B7heYPcH.js"];
export const stylesheets = [];
export const fonts = [];
