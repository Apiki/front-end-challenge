import PostsFeed from "@/components/PostsFeed";
import { getPosts } from "@/lib/api";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadata({
    title: "Últimas em Desenvolvimento",
    description:
      "Conteúdo técnico sobre WordPress, arquitetura, performance, segurança e JavaScript moderno.",
  });
}

export default async function HomePage() {
  const { posts, totalPages } = await getPosts(1);

  return (
    <main className="page page--home">
      <div className="container home-layout">
        <section className="home-hero" aria-labelledby="home-hero-title">
          <p className="home-hero__eyebrow">Conteúdo para Desenvolvedores</p>
          <h1 className="home-hero__title h1" id="home-hero-title">
            Últimas em <br />
            Desenvolvimento
          </h1>
          <p className="home-hero__description">
            Artigos sobre WordPress, arquitetura, performance, segurança e
            ecossistema JavaScript para quem constrói produtos e aplicações web.
          </p>
        </section>

        <section className="home-feed" aria-label="Últimos posts">
          <PostsFeed
            initialPosts={posts}
            initialPage={1}
            initialTotalPages={totalPages}
          />
        </section>
      </div>
    </main>
  );
}
