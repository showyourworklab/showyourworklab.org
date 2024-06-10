export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "svelte-app/_app",
	assets: new Set([".nojekyll","images/hero-1.avif"]),
	mimeTypes: {".avif":"image/avif"},
	_: {
		client: {"start":"_app/immutable/entry/start.CPn_z5PD.js","app":"_app/immutable/entry/app.lazxmzHX.js","imports":["_app/immutable/entry/start.CPn_z5PD.js","_app/immutable/chunks/entry.CxLOZMQ_.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/entry/app.lazxmzHX.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.C3aWS7UM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
