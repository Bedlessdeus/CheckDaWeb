export const GET = async ({ url }) => {
	const faviconUrl = url.searchParams.get('url');
	if (!faviconUrl) {
		return new Response('Favicon URL is required', { status: 400 });
	}

	try {
		const response = await fetch(`${faviconUrl}/favicon.ico`);
		if (!response.ok) {
			return new Response('Failed to fetch favicon', { status: response.status });
		}

		const contentType = response.headers.get('content-type') || 'image/x-icon';
		const body = await response.arrayBuffer();
		return new Response(body, {
			headers: {
				'Content-Type': contentType,
				'Cache-Control': 'public, max-age=86400'
			}
		});
	} catch (error) {
		return new Response('Error fetching favicon', { status: 500 });
	}
};
