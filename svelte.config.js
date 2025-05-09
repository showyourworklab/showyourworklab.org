import adapter from '@sveltejs/adapter-static'
import { sveltePreprocess } from 'svelte-preprocess'

const config = {
	preprocess: sveltePreprocess(),
	kit: {
		alias: {
			$src: './src',
			$lib: './src/lib',
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		})
	}
};

export default config;
