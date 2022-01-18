export type TPost = {
	author: {
		name: string;
		slug: string;
	};
	content: string;
	date: string;
	datetime: string;
	excerpt: string;
	images: {
		large: TPostImage;
		medium: TPostImage;
	};
	slug: string;
	title: string;
};

export type TPostImage = {
	file: string;
	height: number;
	mime_type: string;
	source_url: string;
	width: number;
};
