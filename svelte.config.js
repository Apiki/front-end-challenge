/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { resolve } from 'path';

import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		defaults: {
			style: 'postcss'
		},
		postcss: true
	}),

	kit: {
		adapter: vercel(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: () => ({
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$styles: resolve('./src/styles'),
					$routes: resolve('./src/routes')
				}
			},
			envPrefix: ['VITE_', 'SVELTEKIT_']
		})
	}
};

export default config;
