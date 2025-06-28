import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { env } from 'process';

console.log(env.SELF_URL);

const config = {
	preprocess: vitePreprocess(),
	kit: {
		csp: {
			directives: {
				'default-src': ["'self'", env.PRIVATE_SELF_URL ?? 'http://localhost:5173'],
				'script-src': ["'self'", env.PRIVATE_SELF_URL ?? 'http://localhost:5173'],
				'style-src': [
					"'self'",
					env.PRIVATE_SELF_URL ?? 'http://localhost:5173',
					"'unsafe-inline'",
					'https://fonts.googleapis.com'
				],
				'img-src': ["'self'", env.PRIVATE_SELF_URL ?? 'http://localhost:5173', 'data:', 'blob:'],
				'font-src': [
					"'self'",
					env.PRIVATE_SELF_URL ?? 'http://localhost:5173',
					'https://fonts.gstatic.com'
				],
				'connect-src': ["'self'", env.PRIVATE_SELF_URL ?? 'http://localhost:5173']
			}
		},
		adapter: adapter()
	}
};

export default config;
