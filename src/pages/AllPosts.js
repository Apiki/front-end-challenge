import PostList from '../components/posts/PostList';
import { useState, useEffect } from 'react';
import { useParams, Link, } from 'react-router-dom';

function AllPostsPage() {

    const params = useParams();
    const page = params.page.replace("page", "");
    const url = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=' + page;

    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [totalPages, setTotalPages] = useState();
    const linkNextPage = '/postlist/page' + (+page + 1).toString();

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((response) => {
                const totalPages = parseFloat(response.headers.get('X-WP-TotalPages'));
                setTotalPages(totalPages);
                return response.json()
            })
            .then((data) => {
                const posts = [];
                for (const key in data) {
                    let imageChecked = "";
                    try { imageChecked = data[key]._embedded["wp:featuredmedia"][0].source_url } catch { imageChecked = "no image" };
                    const post = {
                        id: key,
                        key: key,
                        image: imageChecked,
                        title: data[key].title.rendered,
                        slug: data[key].slug
                    };
                    posts.push(post);
                }
                setIsLoading(false);
                setLoadedPosts(posts);
            });
    }, []);

    if (isLoading) {
        return (<section section >
            <p> Carregando </p> </section>
        );
    }

    return (
        <section className="blog">
            <h1> Seja Bem Vindo </h1>
            <PostList posts={loadedPosts} /> {
                totalPages > page ?
                    <a className="view_more" href={linkNextPage} > Carregar mais... </a> : <p> Ultima página </p>
            }
        </section>
    );
}

export default AllPostsPage;