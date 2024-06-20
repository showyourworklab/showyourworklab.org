export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","images/photos/hero1.jpg","images/photos/hero2.jpg","images/photos/hero3.jpg","images/photos/hero4.jpg","images/photos/hero5.jpg","images/photos/hero6.jpg","images/photos/hero7.jpg","images/photos/hero8.jpg","images/photos/syw.jpg","images/photos/syw_corey.jpg","images/photos/syw_nora.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BC2X3wqJ.js","app":"_app/immutable/entry/app.CSu16hI7.js","imports":["_app/immutable/entry/start.BC2X3wqJ.js","_app/immutable/chunks/entry.B7heYPcH.js","_app/immutable/chunks/scheduler.Bu5GJ83t.js","_app/immutable/entry/app.CSu16hI7.js","_app/immutable/chunks/scheduler.Bu5GJ83t.js","_app/immutable/chunks/index.CXDde0gU.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
