export type PostType = {
  id: number;
  slug: string;
  title: { rendered: string };
  _embedded: {
    "wp:featuredmedia": [
      {
        source_url: string;
      }
    ];
  };
};

export async function getPosts(
  page: number
): Promise<{ posts: PostType[]; totalPages: number }> {
  if (!page || page < 1) {
    throw new Error("O parâmetro 'page' é obrigatório e deve ser maior que 0.");
  }

  const url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}&per_page=10`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar posts.");
  }

  const posts: PostType[] = await res.json();
  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? "1");

  return { posts, totalPages };
}
