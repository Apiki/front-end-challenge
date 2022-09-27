import React from 'react'
import { useParams } from 'react-router-dom'
import { POST_GET } from '../Api'
import { Error } from '../Ajuda/Error'
import { Loading } from '../Ajuda/Loading'
import { useFetch } from '../Hooks/useFetch'

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
            <article >
                {data.map(item => {

                    return <div key={item.id}>

                        <img src={item._embedded['wp:featuredmedia'][0].source_url} alt="Link para o post" />

                        <h1>{item.title.rendered}</h1>
                        <div
                            dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                        />
                    </div>
                })}
            </article>
        );
}

