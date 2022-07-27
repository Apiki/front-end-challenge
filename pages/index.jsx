
import { useState, useEffect } from 'react';
import Head from 'next/head'
import { PostCard, PostCardSkeleton } from '../components/PostCard';
import { getCategoryPosts } from '../services/posts';
import { formateDate, handlePostCardImage } from '../utils/helpers';
import { Default } from '../themes/Default';
import { Error } from '../components/Error';
import ReloadIcon from "../public/icons/reload.svg";
import { format } from 'date-fns';

const Home = () => {
    const categoryId = 518;
    const [posts, setPosts] = useState([]);
    const [postsPage, setPostsPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [totalPages, setTotalpages] = useState(null);

    useEffect(() => {
        handleGetCategoryPosts([], 1);
    }, []);

    const nextPage = () => {
        const next = postsPage + 1;
        handleGetCategoryPosts(posts, next);
        setPostsPage(next);
    }

    const handleGetCategoryPosts = (current, page) => {
        setLoading(true); 
        setError(false);  

        getCategoryPosts(categoryId, page)
        .then(res => {
            setPosts(current.concat(res.data)); 
            setTotalpages(res.headers['x-wp-totalpages']);
            setLoading(false);  
        }).catch(() => {
            setLoading(false);  
            setError(true);
        });
    }

    return (
        <>
            <Head>
                <title>Blog Apiki</title>
                <meta name="description" content="Página inicial do site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Default>
                <section className="home">
                    <div className="container">
                    {
                        !error ? (
                            loading ? (
                                <div className='list-posts'>
                                    <PostCardSkeleton/>
                                    <PostCardSkeleton/>
                                    <PostCardSkeleton/>
                                    <PostCardSkeleton/>
                                    <PostCardSkeleton/>
                                    <PostCardSkeleton/>
                                    <PostCardSkeleton/>
                                    <PostCardSkeleton/>
                                    <PostCardSkeleton/>
                                    <PostCardSkeleton/>
                                </div>
                            ) : (
                                <>
                                    {posts?.length > 0 ? (
                                        <>
                                            <h2 className='post-title'>Últimos Posts</h2>

                                            <div className='list-posts'>
                                                {
                                                    posts.map((post, i) => 
                                                        <PostCard
                                                            image={{
                                                                src: handlePostCardImage(post?._embedded), 
                                                                alt: post?.title?.rendered
                                                            }}
                                                            title={post?.title?.rendered}
                                                            slug={post?.slug}
                                                            date={formateDate(post?.date)}
                                                            key={`post-${i}`}
                                                        />
                                                    )
                                                }
                                            </div>
                                            {
                                                totalPages > postsPage && (
                                                    <div className="pagination">
                                                        <button className="btn btn-primary" onClick={nextPage}>
                                                            <img src={ReloadIcon.src} alt="" />
                                                            Carregar Mais
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        </>
                                    ) : (
                                        <div className="no-posts">
                                            <h2 className="text-error">No momento não existem postagens disponíveis</h2>
                                        </div>
                                    )}
                                </>
                            )
                        ) : (
                            <Error />
                        )
                    }
                    </div>
                </section> 
            </Default>
            
        </>  
    )
}

export default Home;
