import { env } from '$env/dynamic/private';
import { initFont } from '$lib/server/icon';
import type { Handle, ServerInit } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		filterSerializedResponseHeaders(name, value) {
			return name === 'Content-Security-Policy' || name === 'X-Frame-Options';
		}
	});
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set(
		'Content-Security-Policy',
		[
			`default-src 'self' ${env.PRIVATE_SELF_URL};`,
			`script-src 'self' ${env.PRIVATE_SELF_URL};`,
			`style-src 'self' 'unsafe-inline' https://fonts.googleapis.com ${env.PRIVATE_SELF_URL};`,
			`img-src 'self' data: blob: ${env.PRIVATE_SELF_URL};`,
			`font-src 'self' https://fonts.gstatic.com ${env.PRIVATE_SELF_URL};`,
			`connect-src 'self' ${env.PRIVATE_SELF_URL};`
		].join(' ')
	);
	return response;
};

export const init: ServerInit = () => {
	initFont();
};
