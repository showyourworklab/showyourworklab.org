

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D0WWfQqk.js","_app/immutable/chunks/scheduler.Bu5GJ83t.js","_app/immutable/chunks/index.CXDde0gU.js","_app/immutable/chunks/constants.BlOFttL-.js"];
export const stylesheets = ["_app/immutable/assets/2.BBQARBgH.css"];
export const fonts = [];
