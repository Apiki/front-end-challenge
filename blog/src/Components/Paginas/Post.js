import React from 'react'
import styles from './Post.module.css'
import { Link, useParams } from 'react-router-dom'
import { POST_GET } from '../../Api'
import { Error } from '../../Ajuda/Error'
import { Loading } from '../../Ajuda/Loading'
import { useFetch } from '../../Hooks/useFetch'
import Head from '../../Ajuda/Head'

export const Post = () => {
    const { data, loading, error, request } = useFetch()

    const slug = useParams()

    React.useEffect(() => {
        async function fetchPages() {
            const { url, options } = POST_GET(slug)
            await request(url, options)
        }
        fetchPages()
    }, [request, slug])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)

        return (
            <article className={`${styles.post} container animeLeft`}>
                <div>
                    <Head
                        title="Post"
                        description="Conteúdo do post."
                    />
                    {data.map(item => {
                        return <div key={item.id}>
                            <h1>{item.title.rendered}</h1>
                            <p dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />

                            <img src={item._embedded['wp:featuredmedia'][0].source_url} alt={`Imagem referente ao post: ${item.title.rendered}`} />                       

                            <div
                                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                            />
                        </div>
                    })}
                </div>
                <div className={` btnHome container`} >

                    <Link to={"/"} className={`voltar  button animeLeft `}>
                        <button>voltar</button>
                    </Link>

                </div>

            </article>
        );
}

