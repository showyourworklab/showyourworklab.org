

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ChWRf7G5.js","_app/immutable/chunks/scheduler.BBaljRlA.js","_app/immutable/chunks/index.nkUJBPft.js","_app/immutable/chunks/constants.DVXt2XpY.js"];
export const stylesheets = ["_app/immutable/assets/2.DLHK4M0F.css"];
export const fonts = [];
