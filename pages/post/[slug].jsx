import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Default } from '../../themes/Default';
import { getPostDetails } from '../../services/posts';
import { Error } from '../../components/Error';
import Image from 'next/image';

const Post = () => {    
    const router = useRouter();
    const { slug } = router.query;

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(slug) {
            getPostDetails(slug).then(({data}) => {
                setPost(data[0]);
                setLoading(false);
            }).catch(() => {
                setError(true);
                setLoading(false);
            });
        }
    }, [slug]);
    
    return (
        <>
            <Head>
                <title>Blog Apiki | UEPA</title>
                <meta name="description" content="Página inicial do site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Default>
                <section className="archive">
                    <div className="container">
                        {!error ? (
                                <div className="post-content">
                                    {loading ? (
                                        <div className="post-infos mb-15">
                                            <div className='post-title-skeleton'></div>
                                            <div className='post-excerpt-skeleton mb-15'></div>
                                            <div className='post-date-skeleton mb-15'></div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="post-infos mb-15">
                                                <h1 className="post-title mb-15">
                                                    {post?.title?.rendered}
                                                </h1>
                                                <div className='post-excerpt mb-15' dangerouslySetInnerHTML={{__html: post?.excerpt?.rendered}}></div>
                    
                                                <small className='post-date'>
                                                    {formateDate(post?.date)}
                                                </small>
                                            </div>
                
                                            <div className="post-featured-image mb-15">
                                                <img
                                                    src={post._embedded["wp:featuredmedia"][0].source_url}
                                                    alt={post?.title?.rendered}
                                                    loading="lazy"
                                                />
                                                <figcaption className='post-image-reference'>Fonte: Bla bla</figcaption>
                                            </div>
                                            <div className="post-text" dangerouslySetInnerHTML={{__html: post?.content?.rendered}}></div>
                                        </>
                                    )}
                                </div>
                            ) : <Error />
                        }
                    </div>
                </section>    
            </Default>
        </>
    )
}

export default Post;