

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BpJE9fCJ.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.m1pniJaI.js"];
export const stylesheets = [];
export const fonts = [];
