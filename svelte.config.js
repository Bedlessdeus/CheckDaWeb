import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		csp: {
			directives: {
				'default-src': ["'self'"],
				'script-src': ["'self'"],
				'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
				'img-src': ["'self'", 'data:', 'blob:'],
				'font-src': ["'self'", 'https://fonts.gstatic.com'],
				'connect-src': ["'self'"]
			}
		},
		adapter: adapter()
	}
};

export default config;
