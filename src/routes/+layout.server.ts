import type { LayoutServerLoad } from './$types.js';

export const load : LayoutServerLoad = async ({ locals }) => {
    return {
        nonce: locals.nonce
    }
}