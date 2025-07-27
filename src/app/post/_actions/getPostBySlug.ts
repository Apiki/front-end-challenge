export type SinglePostType = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded: {
    "wp:featuredmedia": [
      {
        source_url: string;
      }
    ];
    author: [
      {
        name: string;
        avatar_urls: {
          [size: string]: string;
        };
      }
    ];
  };
};

export async function getPostBySlug(
  slug: string
): Promise<SinglePostType | null> {
  try {
    const res = await fetch(
      `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`,
      {
        next: { revalidate: 60 }, // ISR de 60s
      }
    );

    if (!res.ok) {
      console.error("Erro ao buscar o post.");
      return null;
    }

    const data: SinglePostType[] = await res.json();

    if (data.length === 0) {
      return null;
    }

    return data[0];
  } catch (error) {
    console.error("Erro interno:", error);
    return null;
  }
}
