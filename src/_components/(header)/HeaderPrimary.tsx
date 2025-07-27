"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type PostType = {
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

export default function HeaderPrimary() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadPosts(page: number) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/posts?page=1&per_page=1`);
      if (!res.ok) throw new Error(`Erro: ${res.statusText}`);
      const data = await res.json();
      setPosts(data.posts);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts(1);
  }, []);

  if (loading && posts.length === 0) {
    return <p className="text-gray-600 font-medium">Carregando post...</p>;
  }

  if (error) {
    return <p className="text-red-600 font-medium">Erro: {error}</p>;
  }

  const post = posts[0];

  if (!post) return null;

  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const formattedDate = format(new Date(post.date), "dd/MM/yyyy", {
    locale: ptBR,
  });

  return (
    <article className="flex flex-col items-start justify-end relative h-[60vh] sm:h-[75vh] mt-19">
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-2xl z-0" />

      <Image
        src={imageUrl}
        alt={post.title.rendered}
        fill
        priority
        className="w-full h-full object-center object-cover rounded-2xl -z-10"
      />

      <div className="w-full p-6 md:p-12 flex flex-col items-start justify-center z-0 text-light gap-4">
        <Tag link={`/#/`} name="Desenvolvimento com WordPress" />

        <Link
          href={`/post/${post.slug}`}
          className="font-bold sm:text-xl lg:text-4xl bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-2xl md:text-5xl"
        >
          {post.title.rendered}
        </Link>

        <span className="text-sm italic font-light">
          Data de publicação:{formattedDate}
        </span>
      </div>
    </article>
  );
}
