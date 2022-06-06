import React from 'react';
import { useBlogData } from '../../Contexts/BlogContext';
import { SkeletonLoading } from './SkeletonLoading';

export default function PostCard() {

    const { blogData, setPageNumber, isLoading } = useBlogData()

    function renderCards() {
        return (
            blogData &&
            blogData.map(
                (post) => (
                    <div
                        className="mb-4 w-full md:w-96"
                        key={post.guid.rendered}
                    >
                        <figure className=''>
                            <img className='object-cover shadow-xl rounded-xl h-56 w-full lg:w-96' src={post.yoast_head_json.og_image[0].url} alt={post.title.rendered} />
                            <figcaption className='m-2 text-gray-500 text-opacity-80 text-sm'>{handleDate(post.date)} | {post.yoast_head_json.twitter_misc["Est. tempo de leitura"]}</figcaption>
                        </figure>
                        <div className="p-1">
                            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} className="text-xl font-bold text-gray-900"></div>
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="mt-2 text-gray-500"></div>
                        </div>
                    </div>
                )
            )
        )
    }

    function handleDate(date: string) {
        const formattedDate = new Date(date).toLocaleDateString("pt-BR");
        return formattedDate;
    }

    function handlePagination() {
        setPageNumber((prevValue) => (prevValue += 1))
        window.scrollTo(0, 0)
    }

    return (
        <>
            <main className="py-8 px-5 flex flex-wrap justify-center gap-3 md:w-full">
                {isLoading ? <SkeletonLoading /> : renderCards()}
            </main>
            <button onClick={handlePagination}>Carregar Mais</button>
        </>
    )
}