import { env } from '$env/dynamic/private';
import { initFont } from '$lib/server/icon';
import type { Handle, ServerInit } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	response.headers.set('X-Frame-Options', 'DENY');
	return response;
};

export const init: ServerInit = () => {
	initFont();
};
