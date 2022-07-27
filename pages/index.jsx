
import { useState, useEffect } from 'react';
import Head from 'next/head'
import { PostCard, PostCardSkeleton } from '../components/PostCard';
import { getCategoryPosts } from '../services/posts';
import { handlePostCardImage } from '../utils/helpers';
import { Default } from '../themes/Default';

const Home = () => {
    const categoryId = 518;
    const [posts, setPosts] = useState([]);
    const [postsPage, setPostsPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        handleGetCategoryPosts([], 1);
    }, []);

    const nextPage = () => {
        const next = postsPage + 1;
        setPostsPage(next);
        handleGetCategoryPosts(posts, postsPage);
    }

    const handleGetCategoryPosts = async (current, page) => {
        setLoading(true); 
        setError(false);  

        getCategoryPosts(categoryId, page)
        .then(res => {
            setPosts(current.concat(res)); 
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
                                                            date={post?.date}
                                                            key={`post-${i}`}
                                                        />
                                                    )
                                                }
                                            </div>
                                            <div className="pagination">
                                                <button className="btn btn-primary" onClick={nextPage}>Carregar Mais</button>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="no-posts">
                                            <h2 className="text-error">No momento não existem postagens disponíveis</h2>
                                        </div>
                                    )}
                                </>
                            )
                        ) : (
                            <div className="error">
                                <h2 className="text-error mb-15">Ops, Tivemos um Problema!</h2>
                                <button className="btn btn-primary">Recarregar Página</button>
                            </div>
                        )
                    }
                    </div>
                </section> 
            </Default>
            
        </>  
    )
}

export default Home;
