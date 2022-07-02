export interface CardContent {
    id: number,
    title: {
        rendered: string
    },
    slug: string,
    yoast_head_json: {
        twitter_misc: {
            'Est. tempo de leitura': string
        },
        description: string

    }
    _embedded: {
        author: [{
            name: string
            avatar_urls: {
                96: string | undefined
            }
        }]
        'wp:featuredmedia': [{
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

export interface PostContent {
    0: {
        title: {
            rendered: string
        },
        content: {
            rendered: string
        },
        excerpt: {
            rendered: string
        },
        date: string,

        yoast_head_json: {
            og_image: [
                {
                    url: string
                }
            ]
            twitter_misc: {
                'Est. tempo de leitura': string
            }
            description: string
    
        },

        _embedded: {
            author: [{
                name: string
                avatar_urls: {
                    96: string | undefined
                }
            }]
            'wp:featuredmedia': [{
                media_details: {
                    sizes: {
                        'jnews-750x375': {
                            source_url: string
                        }
                    }
                }
            }
            ]
        },
    }
}