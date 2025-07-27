"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Button } from "./ui/button";

type PostType = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  _embedded: {
    "wp:featuredmedia": [
      {
        source_url: string;
      }
    ];
  };
};

export default function BlogPosts() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadPosts(page: number) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/posts?page=${page}&per_page=10`);
      if (!res.ok) {
        throw new Error(`Erro: ${res.statusText}`);
      }
      const data = await res.json();
      console.log("Posts carregados na página", page, data.posts.length);

      setPosts((prev) => {
        const ids = new Set(prev.map((p) => p.id));
        const novos = data.posts.filter((p: PostType) => !ids.has(p.id));
        return [...prev, ...novos];
      });
      setTotalPages(data.totalPages);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts(page);
  }, [page]);

  return (
    <div className="flex flex-col gap-4 items-start">
      {/*Message Error */}
      {error && (
        <p className="text-red-600 font-medium">
          Erro ao carregar os posts: {error}
        </p>
      )}
      {/*Message Loading */}
      {loading && posts.length === 0 && (
        <p className="text-gray-600 font-medium">Carregando posts...</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/*List of posts */}
        {posts.map((post) => (
          <div key={post.id}>
            <Card
              title={post.title.rendered}
              slug={post.slug}
              date={post.date}
              imageUrl={
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
                "/fallback.jpg"
              }
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        {totalPages && page < totalPages && (
          <Button
            disabled={loading}
            onClick={() => setPage((prev) => prev + 1)}
            className="py-2 px-4 rounded disabled:opacity-50 cursor-pointer w-fit"
          >
            {loading ? "Carregando..." : "Carregar mais"}
          </Button>
        )}
      </div>
    </div>
  );
}
