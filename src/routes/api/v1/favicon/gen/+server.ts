import { buildFaviconICO } from '$lib/server/icon.js';
import { genIcon } from '$lib/server/util.js';

export const GET = async ({ url }) => {
	const faviconUrl = url.searchParams.get('url');
	if (!faviconUrl) {
		return new Response('Favicon URL is required', { status: 400 });
	}

	const contentType = 'image/x-icon';
	const body = buildFaviconICO(64, 64, { r: 0, g: 0, b: 0, a: 0 });
	return new Response(body, {
		headers: {
			'Content-Type': contentType,
			'Cache-Control': 'public, max-age=86400'
		}
	});
};
