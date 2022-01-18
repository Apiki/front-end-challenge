import type { TPost } from './posts.types';

export function normalizeData(rawData: unknown[]): TPost[] {
	const data = rawData.map(({ _embedded: embed, ...post }) => ({
		author: {
			name: embed.author[0].name,
			slug: embed.author[0].slug
		},
		content: post.content.rendered,
		date: formatDateToShow(new Date(post.date)),
		datetime: post.date,
		excerpt: removeHTMLFromString(post.excerpt.rendered),
		images: embed['wp:featuredmedia'][0].media_details.sizes,
		slug: post.slug,
		title: post.title.rendered
	})) as TPost[];
	return data;
}

export const formatDateToShow = (date: Date): string => {
	return Intl.DateTimeFormat('pt-br', { dateStyle: 'long' }).format(date);
};

export const removeHTMLFromString = (str: string): string => {
	return str.replace(/<\/?[^>]+(>|$)/g, '');
};
