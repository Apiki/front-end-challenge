export type PostListType = IPost[];

export interface IPost {
    id: number;
    date: string;
    modified: string;
    slug: string;
    title: {
        rendered: string;
    };
    content: { rendered: string };
    excerpt: { rendered: string };
    meta?: {
        _yoast_wpseo_title: string;
        _yoast_wpseo_metadesc: string;
        _yoast_wpseo_opengraph_title: string;
        _yoast_wpseo_opengraph_description: string;
        _yoast_wpseo_facebook_title: string;
        _yoast_wpseo_facebook_description: string;
        _yoast_wpseo_facebook_image: string;
        _yoast_wpseo_twitter_title: string;
        _yoast_wpseo_twitter_description: string;
        _yoast_wpseo_twitter_image: string;
    };
    _embedded: {
        author: {
            id: number;
            name: string;
            description: string;
            avatar_urls: { 24: string };
        }[];
        "wp:featuredmedia"?: { source_url: string }[];
    };
}

export interface IPostsResponse {
    data: PostListType;
    headers: {
        "x-wp-total": string;
        "x-wp-totalpages": string;
    };
}
