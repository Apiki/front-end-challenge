import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "./post.module.scss"

const Posts = ({ posts = [] }) => {
    if (!posts) return <p>Carregando...</p>;

    return (
        <div className={styles.cards}>
            {posts.map((post) => (
                <Link key={post.id} href={`/post/${post.slug}`} id={post.id}>
                    <div className={styles.cardPost}>
                        <Image
                            src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                            width={150}
                            height={150}
                            alt={post.title.rendered}
                            className={styles.image_card}
                        />
                        <div className={styles.cardPosText}>
                            <h2>{post.title.rendered}</h2>
                            <div
                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                            />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Posts;