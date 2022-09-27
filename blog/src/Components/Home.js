import React from 'react'
import { Error } from '../Ajuda/Error'
import { Link } from 'react-router-dom';
import { BlogContext } from './BlogContext';
import styles from './Home.module.css'

export const Home = () => {

    const { dadospage, pages, navPage, carregarMais, error, carregarAnterior } = React.useContext(BlogContext);

    if (dadospage === null) return null

    if (error) return <Error error={error} />
    return (
        <section className={styles.Home} >

            {dadospage.map((item) => (

                <li key={item.slug} className={styles.card}>

                    <h2>{item.title.rendered}</h2>

                    <Link to={`/Homeslug/${item.slug} `}>
                        <img src={item._embedded['wp:featuredmedia']
                            ? item._embedded['wp:featuredmedia'][0].source_url
                            : ""
                        } alt={item.slug} />
                    </Link>
                    <p>
                        <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                    </p>
                    {/* <p>
                        <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                    </p> */}

                    <Link to={`/Homeslug/${item.slug}`} className={styles.leia}>Veja mais</Link>
                </li>

            ))}

            {navPage > 1 ? (
                <button onClick={() => carregarAnterior()}>Voltar</button>
            ) : (
                ""
            )}

            {navPage < pages ? (
                <button onClick={() => carregarMais()}>PROXIMA PAGINA</button>
            ) : (
                <p>Não existem mais posts.</p>
            )}

        </section>
    )
}


