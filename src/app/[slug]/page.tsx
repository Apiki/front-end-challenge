import { Card } from "@/types/Card";
import { CardNamed } from "@/types/CardNamed";
import { mapPostToBlogPost } from "@/usePosts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

interface PostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const response = await fetch(
      'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&per_page=100'
    );
    const posts: Card[] = await response.json();
    
    return posts.map((post) => ({
      slug: post.link.split('com/')[1],
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

async function getPost(slug: string) {
  const response = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`, {
        next: { revalidate: 604800 }
    }
  );
  const posts: Card[] = await response.json();
  
  if (!posts || posts.length === 0) {
    notFound();
  }
  
  const post: Card = posts[0];
  const cardNamed: CardNamed = mapPostToBlogPost(post, true);
  return cardNamed;
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  const markup = { __html: post.content ?? "" }
  
  return (
    <main className={styles.container}>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.backButton}>
          ← Voltar para Home
        </Link>
      </nav>
      <div className={styles.imageContainer}>
        <Image
          src={post.imagem}
          alt={post.alt}
          width={post.width}
          height={post.height}
          className={styles.image}
          priority
        />
      </div>
      <h1 className={styles.title}>{post.titulo}</h1>
      {post.data && <time className={styles.date}>{post.data}</time>}
      {post.excerpt && (
        <div 
          className={styles.excerpt} 
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
      )}
      <div className={styles.content} dangerouslySetInnerHTML={markup}></div>
    </main>
  );
}
