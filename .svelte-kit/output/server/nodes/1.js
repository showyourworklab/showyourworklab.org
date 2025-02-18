

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DD6-zVDV.js","_app/immutable/chunks/scheduler.D0URV7Fd.js","_app/immutable/chunks/index.CNC0Sm3a.js"];
export const stylesheets = ["_app/immutable/assets/1.Bu2weBB0.css"];
export const fonts = [];
