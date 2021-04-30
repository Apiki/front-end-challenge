import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import styles from './styles.module.scss';

const Posts = ({ postsToRender }) => {
    return (
        <section className={styles.post}>
            <ul className={styles.post}>
                {postsToRender.map(post => {
                    return (
                        <Link href={`/posts/${post.slug}`}>
                            <li key={post.id}>
                                <section>
                                    <Image 
                                        width={192} 
                                        height={192} 
                                        src={post.thumbnail} 
                                        alt={post.title}
                                        objectFit="cover"
                                        />
                                </section>
                                
                                <a>{post.title}</a>
                                <div dangerouslySetInnerHTML={{ __html: post.description }}/>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </section>
    )
}

export default Posts;