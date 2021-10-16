interface IKeyMap {
    [key: string]: string;
}

interface IAuthor {
    avatar_urls: IKeyMap;
    description: string;
    id: number;
    link: string;
    name: string;
    slug: string;
    url: string;
}

interface ICaption {
    rendered: string;
}

interface IContent {
    protected?: boolean;
    rendered: string;
}

interface IEmbedded {
    author: IAuthor[];
    replies: IReply[][];
    "wp:featuredmedia": IWPFeaturedMedia[];
    "wp:term": IWPTerm[][];
}

interface IGuid {
    rendered: string;
}

interface IImageMeta {
    aperture: string;
    camera: string;
    caption: string;
    copyright: string;
    created_timestamp: string;
    credit: string;
    focal_length: string;
    iso: string;
    keywords: string[];
    orientation: string;
    shutterspeed: string;
    title: string;
}

interface IMediaDetails {
    file: string;
    height: number;
    image_meta: IImageMeta;
    sizes: ISize;
    width: number;
}

interface IPost {
    author: number;
    categories: number[];
    comment_status: string;
    content: IContent;
    date: string;
    date_gmt: string;
    excerpt: IContent;
    featured_media: number;
    format: string;
    guid: IGuid;
    id: number;
    link: string;
    meta: any[];
    modified: string;
    modified_gmt: string;
    ping_status: string;
    slug: string;
    status: string;
    sticky: boolean;
    tags: number[];
    template: string;
    title: ITitle;
    type: string;
    _embedded: IEmbedded;
}

interface IReply {
    author: number;
    author_avatar_urls: IKeyMap;
    author_name: string;
    author_url: string;
    content: IContent;
    date: string;
    id: number;
    link: string;
    parent: number;
    type: string;
}

interface ISize {
    full: ISizeInfo;
    "jnews-75x75": ISizeInfo;
    "jnews-120x86": ISizeInfo;
    "jnews-350x250": ISizeInfo;
    "jnews-360x180": ISizeInfo;
    "jnews-360x504": ISizeInfo;
    "jnews-750x375": ISizeInfo;
    "jnews-750x536": ISizeInfo;
    "jnews-1140x570": ISizeInfo;
    "jnews-1140x815": ISizeInfo;
    "jnews-featured-750": ISizeInfo;
    "jnews-featured-1140": ISizeInfo;
    large: ISizeInfo;
    medium: ISizeInfo;
    medium_large: ISizeInfo;
    thumbnail: ISizeInfo;
}

interface ISizeInfo {
    file: string;
    height: number;
    mime_type: string;
    source_url: string;
    width: number;
}

interface ITitle {
    rendered: string;
}

interface IWPFeaturedMedia {
    alt_text: string;
    author: number;
    caption: ICaption;
    date: string;
    featured_media: number;
    featured_media_src: any[];
    id: number;
    link: string;
    media_details: IMediaDetails;
    media_source: string;
    media_type: string;
    mime_type: string;
    slug: string;
    source_url: string;
    title: ITitle;
    type: string;
}

interface IWPTerm {
    id: number;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
}

export type { IAuthor, IEmbedded, IPost };
