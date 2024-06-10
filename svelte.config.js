// import adapter from '@sveltejs/adapter-static'
import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

const config = {
	preprocess: preprocess(),
	kit: {
		alias: {
			$src: './src',
			$lib: './src/lib',
		},
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? `/svelte-app` : '',
		},
	}
};

export default config;
