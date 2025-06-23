import { env } from '$env/dynamic/private';
import { buildFaviconICO, RGBA, Size } from '$lib/server/icon';
import { parse } from 'tldts';

export const GET = async ({ url }) => {
	const faviconUrl = url.searchParams.get('url');
	if (!faviconUrl) {
		return new Response('Favicon URL is required', { status: 400 });
	}

	const domainSuffix = parse(faviconUrl).domainWithoutSuffix || 'MIS';
	let suffix = domainSuffix;
	while (suffix.length < 3) {
		suffix += domainSuffix;
	}
	const asciiValues = Array.from(suffix.slice(0, 3)).map(
		(c) => c.charCodeAt(0) + (Number.parseInt(env.PRIVATE_FAVICON_COLOR_OFFSET) || 0)
	);
	return new Response(
		buildFaviconICO(
			new Size(64, 64),
			new RGBA(asciiValues[0], asciiValues[1], asciiValues[2], 255),
			domainSuffix.charAt(0).toUpperCase(),
			new RGBA(255, 255, 255, 255)
		),
		{
			headers: {
				'Content-Type': 'image/x-icon',
				'Cache-Control': `public, max-age=${env.PRIVATE_FAVICON_CACHE_TIME || 86400}`
			}
		}
	);
};
