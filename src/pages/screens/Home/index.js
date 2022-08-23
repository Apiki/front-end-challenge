import React, { useEffect, useState } from 'react';
import { getPosts } from '../../../services/posts';
import { ItemCard, ContainerHome } from './styles';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPostsService = async () => {
        const { success, data } = await getPosts();
        if(success) {
            setPosts(data.data);
            setLoading(false);
        }
    }

    useEffect(() => {
        getPostsService()
    }, [])

    if(loading) return <div>Carregando os melhores conteúdos...</div>
    return (
        <ContainerHome>
            {posts.map((item, i) => {
                return (
                    <Link key={i} to={`/${item.slug}`}>
                        <ItemCard>
                            <div>
                                <figure>
                                    <img alt="imagem destaque" src={item._embedded['wp:featuredmedia'][0].source_url} />
                                </figure>
                            </div>
                            <div>
                                <h1>{item.title.rendered}</h1>
                                <h2><div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}} /></h2>
                            </div>
                        </ItemCard>
                    </Link>
                );
              })}
        </ContainerHome>
    )
}

export default Home;