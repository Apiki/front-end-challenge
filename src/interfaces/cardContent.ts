export interface CardContent {
    id: number
    date: string
    slug: string
    title: {
        rendered: string
    }
    excerpt: {
        rendered: string
    }

    content: {
        rendered: string
    }

    /*SEO da um grau depois*/
    yoast_head_json: {
        og_image: [
            {
                url: string
            }
        ]
        twitter_misc: {
            'Est. tempo de leitura': string
        }

    }
    /* */
    _embedded: {
        author: [{
            name: string
            avatar_urls: {
                96: undefined | string
            }
        }]
        'wp:featuredmedia': [{
            alt_text: string,
            media_details: {
                sizes: {
                    'jnews-750x375': {
                        source_url: string
                    }
                }
            }
        }
        ]
    }
}


export interface Cards {
    cards: CardContent[]
}