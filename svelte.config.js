import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const config = {
	preprocess: preprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$src: './src',
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? `/svelte-app/` : '',
		},
	}
};

export default config;
