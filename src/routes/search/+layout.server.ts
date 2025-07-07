import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
	if (!url.searchParams.has('url') || url.searchParams.get('url') == null) redirect(302, '/');
	return {
		url: url.searchParams.get('url') || ''
	};
};
