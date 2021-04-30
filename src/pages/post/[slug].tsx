import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { api } from '../../services/api';

import styles from './post.module.scss';

type Post = {
    id: string,
    title: string,
    content: string,
    slug: string,
    image: string,
}

type PostProps = {
    post: Post;
}

export default function Post({ post }: PostProps) {
    return (
        <div className={styles.postContainer}>
            <div className={styles.thumbnail}>
                <Image width={700} height={250} src={post.image}/>
            </div>
            
            <h1>{post.title}</h1>

            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content}}/>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params;
    const { data } = await api.get(`posts?_embed&slug=${slug}`);
    
    const post = {
        id: data[0].id,
        title: data[0].title.rendered,
        content: data[0].content.rendered,
        slug: data[0].slug,
        image: data[0]._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url,
    }
    
    return {
        props: {
            post
        },
        revalidate: 60 * 60 * 24, // 24 hours 
    }
}