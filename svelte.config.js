import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const config = {
	preprocess: preprocess(),
	kit: {
		alias: {
			$src: './src',
			$lib: './src/lib',
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		})
	}
};

export default config;
