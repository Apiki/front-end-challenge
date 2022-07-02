import { MouseEvent, useState } from "react";
import { Card } from "./Card";
import { useFetchFirst, useFetchMaxPages, useFetchPage } from "../../../../../services/api";
import { Lightning } from "phosphor-react";
import { api } from "../../../../../services/baseURL"

export function Cards() {
    const { data: posts, setData: setPosts } = useFetchFirst()
    const { maxPages: pages, setPages} = useFetchMaxPages()
    const [page, setPage] = useState<string | number>('2')

    const handleLoadMore = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        api.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`)
            .then((response) => {
                setPage(+page + 1)
                setPages(+pages! - 1)
                const newPosts = response.data
                setPosts([...posts!, ...newPosts!])
            })
        }

    return (
        <div>
            <div className="grid-cards">
                { posts?.map(post => {
                    return (
                        <Card
                            yoast_head_json={post.yoast_head_json}
                            title={post.title}
                            slug={post.slug}
                            _embedded={post._embedded}
                            key={post.id} 
                            id={post.id}                   
                        />
                    )
                })}
            </div>
            <div className="my-9 flex justify-center">
                {pages !== 1 &&
                    <button onClick={handleLoadMore} className="flex border-2 border-orange-500 py-4 px-8 rounded hover:bg-orange-500 transition-colors">
                        <Lightning size={26} color="#FDD00A"/>
                        <span className="px-2 font-bold font-lg text-cyan-500">CARREGAR MAIS...</span>
                    </button>
                }
            </div>
        </div>
    )
}