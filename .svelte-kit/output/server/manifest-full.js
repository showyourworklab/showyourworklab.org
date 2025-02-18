export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
<<<<<<< HEAD
	assets: new Set([".nojekyll","images/.DS_Store","images/favicon-16x16.png","images/favicon-32x32.png","images/favicon.ico","images/icon.png","images/logo-light.svg","images/logo-sm-light.svg","photos/photo_1.jpg","photos/photo_2.jpg","photos/photo_3.jpg","photos/photo_4.jpg","photos/photo_5.jpg","photos/photo_6.jpg","photos/photo_7.jpg","photos/photo_8.jpg","photos/photo_9.jpg","photos/syw.jpg","photos/syw_corey.jpg","photos/syw_nora.jpg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CJ8oc9gd.js","app":"_app/immutable/entry/app.DK6s_a8u.js","imports":["_app/immutable/entry/start.CJ8oc9gd.js","_app/immutable/chunks/entry.CDd8las2.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/entry/app.DK6s_a8u.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.m1pniJaI.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
=======
	assets: new Set([".nojekyll","images/favicon-16x16.png","images/favicon-32x32.png","images/favicon.ico","images/icon.png","images/logo-light.svg","images/logo-sm-light.svg","images/social.png","photos/photo_1.jpg","photos/photo_2.jpg","photos/photo_3.jpg","photos/photo_4.jpg","photos/photo_5.jpg","photos/photo_6.jpg","photos/photo_7.jpg","photos/photo_8.jpg","photos/photo_9.jpg","photos/syw.jpg","photos/syw_corey.jpg","photos/syw_nora.jpg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.C1RUJSDG.js","app":"_app/immutable/entry/app.1zOPkDX9.js","imports":["_app/immutable/entry/start.C1RUJSDG.js","_app/immutable/chunks/entry.DEwXoSDo.js","_app/immutable/chunks/scheduler.BBaljRlA.js","_app/immutable/entry/app.1zOPkDX9.js","_app/immutable/chunks/scheduler.BBaljRlA.js","_app/immutable/chunks/index.nkUJBPft.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
>>>>>>> 8930d919615d9555715455fd33e7dd7adbf502b6
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
