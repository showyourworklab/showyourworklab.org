export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","images/.DS_Store","images/favicon-16x16.png","images/favicon-32x32.png","images/favicon.ico","images/icon.png","images/logo-light.svg","images/logo-sm-light.svg","photos/photo_1.jpg","photos/photo_2.jpg","photos/photo_3.jpg","photos/photo_4.jpg","photos/photo_5.jpg","photos/photo_6.jpg","photos/photo_7.jpg","photos/photo_8.jpg","photos/photo_9.jpg","photos/syw.jpg","photos/syw_corey.jpg","photos/syw_nora.jpg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.De4t6po7.js","app":"_app/immutable/entry/app.BNeq7EIU.js","imports":["_app/immutable/entry/start.De4t6po7.js","_app/immutable/chunks/scheduler.D0URV7Fd.js","_app/immutable/entry/app.BNeq7EIU.js","_app/immutable/chunks/scheduler.D0URV7Fd.js","_app/immutable/chunks/index.CNC0Sm3a.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
