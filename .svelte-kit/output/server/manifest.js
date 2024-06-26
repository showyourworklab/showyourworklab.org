export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","images/.DS_Store","images/logo-light.svg","images/logo-sm-light.svg","images/photos/photo_1.jpg","images/photos/photo_2.jpg","images/photos/photo_3.jpg","images/photos/photo_4.jpg","images/photos/photo_5.jpg","images/photos/photo_6.jpg","images/photos/photo_7.jpg","images/photos/photo_8.jpg","images/photos/photo_9.jpg","images/photos/syw.jpg","images/photos/syw_corey.jpg","images/photos/syw_nora.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.4oOONHR9.js","app":"_app/immutable/entry/app.C2YwsivH.js","imports":["_app/immutable/entry/start.4oOONHR9.js","_app/immutable/chunks/entry.DPhLHb1r.js","_app/immutable/chunks/scheduler.BBaljRlA.js","_app/immutable/entry/app.C2YwsivH.js","_app/immutable/chunks/scheduler.BBaljRlA.js","_app/immutable/chunks/index.nkUJBPft.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
