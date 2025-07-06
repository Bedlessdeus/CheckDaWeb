import type { RequestHandler } from '@sveltejs/kit';

export const GET = async ({ url }) => {
	return new Response('This endpoint is in development', {
		status: 410,
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'no-cache'
		}
	});
};
