import { initFont } from '$lib/server/icon';
import type { Handle, ServerInit } from '@sveltejs/kit';
import { checkDockerHubVersion } from '$lib/server/util';

export const handle: Handle = async ({ event, resolve }) => {
	const nonce = crypto.randomUUID();

	event.locals.nonce = nonce;

	const response = await resolve(event, {
		filterSerializedResponseHeaders(name, value) {
			return name === 'Content-Security-Policy' || name === 'X-Frame-Options';
		}
	});
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set(
		'Content-Security-Policy',
		[
			`default-src 'self';`,
			// TODO: Find a way to generate hashes or nonces for inline scripts
			`script-src 'self' 'unsafe-inline';`,
			`style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;`,
			`img-src 'self' data: blob:;`,
			`font-src 'self' https://fonts.gstatic.com;`,
			`connect-src 'self';`
		].join(' ')
	);
	return response;
};

export const init: ServerInit = async () => {
	console.log(`🛠️  Running: CheckDaWeb\n${await checkDockerHubVersion()}`);
	initFont();
};
