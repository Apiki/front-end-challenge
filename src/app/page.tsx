
import { Metadata } from "next";
import styles from "./page.module.css";
import { handleBlogPosts } from "@/usePosts";
import PostsList from "@/components/PostsList";

export const metadata: Metadata = {
  title: "Home Blog Apiki - Últimas Postagens sobre Desenvolvimento",
  description: "Confira as últimas postagens do Blog Apiki sobre desenvolvimento web, WordPress, tecnologia e programação. Conteúdo atualizado para desenvolvedores.",
  openGraph: {
    title: "Home Blog Apiki - Últimas Postagens sobre Desenvolvimento",
    description: "Confira as últimas postagens do Blog Apiki sobre desenvolvimento web, WordPress, tecnologia e programação.",
    type: "website",
  },
};

export default async function Home() {
  const initialData = await handleBlogPosts(1);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Blog Apiki',
    description: 'Blog da Apiki com conteúdos sobre desenvolvimento web, WordPress e tecnologia',
    url: 'https://blog.apiki.com',
    mainEntity: {
      '@type': 'Blog',
      name: 'Blog Apiki',
      blogPost: initialData.posts.map(post => ({
        '@type': 'BlogPosting',
        headline: post.title.rendered,
        image: post._embedded["wp:featuredmedia"][0].source_url,
        url: post.link,
      }))
    }
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Apiki.DEV</h1>
          <p className={styles.heroSubtitle}>
            Conteúdo de qualidade sobre desenvolvimento web, WordPress, tecnologia e programação
          </p>
          <div className={styles.heroStats}>
            <span className={styles.stat}>
              <strong>{initialData.totalPosts}</strong> artigos publicados
            </span>
            <span className={styles.stat}>
              <strong>WordPress</strong> • <strong>Desenvolvimento</strong> • <strong>Tecnologia</strong>
            </span>
          </div>
        </div>
      </header>
      <PostsList initialData={initialData} />
    </main>
  );
}
