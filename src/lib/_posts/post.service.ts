import { get } from '$lib/api';
import { normalizeData } from './posts.utils';

import type { TSendResponse } from '$lib/api';
import type { TPost } from './posts.types';

function normalizeResponse(response: TSendResponse<unknown[]>): TSendResponse<TPost[]> {
	const data = normalizeData(response.data);
	return { ...response, data };
}

export async function getPosts(pageNumber = 1): Promise<TSendResponse<TPost[]>> {
	const page = `&page=${pageNumber}&per_page=12`;
	return get(`/posts?_embed&categories=518${page}`).then(normalizeResponse);
}

export async function getPostBySlug(slugString: string): Promise<TSendResponse<TPost>> {
	const slug = `&slug=${slugString}`;
	const posts = await get(`/posts?_embed${slug}`).then(normalizeResponse);
	return { ...posts, data: posts.data[0] };
}
