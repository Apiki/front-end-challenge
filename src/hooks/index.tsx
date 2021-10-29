import { api } from '../services/api'

export type PostHeaders = {
  'x-wp-total': string;
  'x-wp-totalpages': string;
};

export type Post = {
  'yoast_head_json': {
    'og_image': [
      {
        url: string;
      }
    ];
  };
  slug: string;
  _embedded: {
    'wp:featuredmedia': [
      {
        'source_url': string;
        'media_details': {
          sizes: {
            large: {
              'medium_large': {
                'source_url': string;
              };
            };
          };
        };
      }
    ];
  };
  title: {
    rendered: string;
  };
};

export type PostCard = {
  data: Post[];
  headers: PostHeaders;
};

export type PostFormatted = {
  title: string;
  link: string;
  urlImg: string[];
  slug: string;
};

export type PostDetails = {
  urlImg: string[];
  title: string;
  content: string;
  subtitle: string;
  urlFacebook: string;
  author: {
    name: string;
    description: string;
    linkBlog: string;
    avatar: string;
  };
};

export const setImage = (data: Post) => {
  const urlImages = [
    data?._embedded?.['wp:featuredmedia']?.[0]?.source_url,
    data?.yoast_head_json?.og_image?.[0]?.url || '',
    data?._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes.large
      ?.medium_large?.source_url || ''
  ]
  return urlImages
}

export const serialize = (data: Post[]) => {
  return data.reduce((ac: PostFormatted[], prox: Post) => {
    if (
      prox.yoast_head_json.og_image[0]?.url ||
      prox?._embedded?.['wp:featuredmedia'][0]
    ) {
      const postFormatted = {
        urlImg: setImage(prox),
        link: prox.slug,
        title: prox.title.rendered,
        slug: prox.slug
      }
      ac.push(postFormatted)
      return ac
    }
    return ac
  }, [])
}

export const getPostApi = async (
  nextPage: number
): Promise<[PostFormatted[], PostHeaders]> => {
  const getPost = (await api.get('', {
    params: {
      categories: 518,
      page: nextPage
    }
  })) as PostCard
  const postSerialize = serialize(getPost.data)
  return [postSerialize, getPost.headers]
}

export const serializePostDetails = (data: any) => {
  return {
    urlImg: setImage(data),
    title: data?.title?.rendered,
    content: data.content.rendered,
    subtitle: data.yoast_head_json.description,
    urlFacebook: data.yoast_head_json.article_publisher,
    author: {
      name: data._embedded.author[0].name,
      description: data._embedded.author[0].description,
      linkBlog: data._embedded.author[0].link,
      avatar: data._embedded.author[0].avatar_urls
    }
  }
}

export const getDetailPost = async (slug: string) => {
  const getPostDetails = (await api.get('', {
    params: {
      slug
    }
  })) as any
  const result = serializePostDetails(getPostDetails.data[0]) as PostDetails
  return result
}
