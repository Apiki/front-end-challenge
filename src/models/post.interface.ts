export interface PostInterface {


    id: number,
    date: Date | string,
    date_gmt: Date | string,
    guid: {
        rendered: string
    },
    modified: Date | string,
    modified_gmt: Date | string,
    slug: string,
    status: string,
    type: string,
    link: string,
    title: {
        rendered: string
    },
    content: {
        rendered: string,
        protected: boolean
    },
    author: string,
    yoast_head_json: {

        description: string

        author: string,
        twitter_misc?: {
            'Escrito por'?: string;
            'Est. tempo de leitura'?: string;
            [key: string]: string | undefined;

        };
    }
    excerpt: {
        rendered: string
    },

    _embedded?: {
        'wp:featuredmedia'?: {
            source_url?: string;
            media_details?: {
                sizes?: {

                    file: string;
                    width: number;
                    height: number;

                };
            };
        }[];
    };
}