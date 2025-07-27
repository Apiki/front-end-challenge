import { NextResponse, type NextRequest } from "next/server";

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

async function getPosts(
  page: number,
  perPage: number
): Promise<{ posts: PostType[]; totalPages: number }> {
  if (!page || page < 1) {
    throw new Error("O parâmetro 'page' é obrigatório e deve ser maior que 0.");
  }

  const url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}&per_page=${perPage}`;
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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const pageParam = searchParams.get("page");
  const perPageParam = searchParams.get("per_page");

  const page = pageParam ? parseInt(pageParam, 10) : null;
  const perPage = perPageParam ? parseInt(perPageParam, 10) : 10; // fallback para 10

  if (!page || page < 1) {
    return NextResponse.json(
      { error: "'page' é obrigatório e deve ser maior que 0." },
      { status: 400 }
    );
  }

  try {
    const { posts, totalPages } = await getPosts(page, perPage);
    return NextResponse.json({
      message: "Posts carregados com sucesso.",
      status: 200,
      posts,
      totalPages,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno ao buscar posts." },
      { status: 500 }
    );
  }
}
