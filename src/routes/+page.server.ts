import { services } from '$lib/server/util';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	return {
		services: services
	};
};
