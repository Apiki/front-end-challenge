import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Default } from '../../themes/Default';
import { getPostDetails } from '../../services/posts';

const nextPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(slug) {
            getPostDetails(slug).then(res => {
                setPost(res);
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
                        <div class="post-content">
                            Teste
                        </div>
                    </div>
                </section>
            </Default>
        </>
    )
}

export default nextPage;