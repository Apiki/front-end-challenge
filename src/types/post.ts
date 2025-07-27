export type PostType = {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  yoast_head_json: YoastHeadJson;
  _embedded: {
    author: {
      name: string;
      link: string;
      avatar_urls: AvatarUrls;
    }[];
    'wp:featuredmedia': FeaturedMedia[];
  };
};

export interface YoastHeadJson {
  title: string;
  description: string;
  robots: Robots;
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  article_publisher: string;
  article_published_time: string;
  article_modified_time: string;
  og_image: OgImage[];
  author: string;
  twitter_card: string;
  twitter_creator: string;
  twitter_site: string;
  twitter_misc: TwitterMisc;
}

export interface OgImage {
  width: number;
  height: number;
  url: string;
  type: string;
}

export interface Robots {
  index: string;
  follow: string;
  'max-snippet': string;
  'max-image-preview': string;
  'max-video-preview': string;
}

export interface TwitterMisc {
  'Escrito por': string;
  'Est. tempo de leitura': string;
}

export type FeaturedMedia = {
  source_url: string;
  alt_text: string;
  media_details: {
    sizes: {
      medium?: MediaSize;
      full?: MediaSize;
    };
  };
};

export type MediaSize = {
  source_url: string;
  width: number;
  height: number;
};

export interface AvatarUrls {
  '24': string;
  '48': string;
  '96': string;
}
