import React from 'react'
import { Error } from '../../Ajuda/Error'
import { Link} from 'react-router-dom';
import { BlogContext } from '../../BlogContext';
import styles from './Home.module.css'
import { Loading } from '../../Ajuda/Loading';
import { useFetch } from '../../Hooks/useFetch';
import Head from '../../Ajuda/Head';
import { PAGE_GET } from '../../Api';

export const Home = () => {

    const { data, request, loading, error } = useFetch()

    const { pages, navPage, carregarMais, carregarAnterior } = React.useContext(BlogContext);

    React.useEffect(() => {
        async function fetchPages() {
            const { url, options } = PAGE_GET({ navPage })
            await request(url, options)
        }   
        fetchPages()
    }, [request, navPage])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)

        return (
            <section  >
                <div className={`${styles.Home} container`}>
                    <Head
                        title="Blog Apiki"
                        description="Páginas com posts do blog."
                    />
                    {data.map((item) => (

                        <li key={item.slug} className={styles.card} >
                            <h2>{item.title.rendered}</h2>
                            <Link to={`${item.slug} `} >
                                <img src={item._embedded['wp:featuredmedia']
                                    ? item._embedded['wp:featuredmedia'][0].source_url
                                    : ""
                                } alt={`Imagem referente ao post: ${item.title.rendered}`} className="imgCard" />
                            </Link>
                            <p className="paragrafo" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                            <Link to={`${item.slug}`} className={styles.leia}>Veja mais</Link>
                        </li>

                    ))}
                </div>

                <div className={`${styles.btnHome} btnHome container`} >
                    {navPage > 1 ? (
                        <button onClick={() => carregarAnterior()} className={`  anterior button animeLeft `}>Anterior</button>
                    ) : (
                        <span></span>
                    )}
                    {navPage < pages ? (

                        <button onClick={() => carregarMais()} className={` proxima  button animeLeft `}>Próxima</button>
                    ) : (
                    <p>Não existem mais posts.</p>
                            )}
                </div>
            </section>
        )
}

