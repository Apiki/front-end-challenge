import React from 'react';
import { useBlogData } from '../../Contexts/BlogContext';
import LoadingIcon from './LoadingIcon';

export default function PostCard() {

    const { blogData, setPageNumber, isFetching } = useBlogData()
    console.log(blogData)

    function handleDate(date: string) {
        const formattedDate = new Date(date).toLocaleDateString("pt-BR");
        return formattedDate;
    }

    function handlePagination() {
        setPageNumber((prevValue) => (prevValue += 1))
    }

    function renderCards() {
        return (
            blogData.map(
                (post, index) => (
                    <div
                        className="mb-4 w-full md:w-96"
                        key={index}
                    >
                        <figure className='relative'>
                            {post._embedded.author[0].name &&
                                <p className="capitalize absolute -right-4 top-2 bg-red-600 w-32 text-center text-white after:content-[''] after:absolute after:-bottom-[11px] after:left-[86px] after:-z-10 after:w-10 after:h-4 after:bg-red-900 after:-rotate-[30deg]">{post._embedded.author[0].name}</p>}

                            <img
                                className='object-cover shadow-xl rounded-xl h-56 w-full lg:w-96'
                                src={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : post.yoast_head_json.og_image[0].url}
                                alt={post.title.rendered} />
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

    return (
        <>
            <main className="flex flex-col justify-center align-center">
                <div className="py-8 px-5 flex flex-wrap justify-center gap-y-3 gap-x-7 md:w-full">
                    {renderCards()}
                </div>
                <button
                    onClick={handlePagination}
                    className="self-center my-5 w-36 h-11 bg-red-600 text-white shadow-lg hover:bg-red-700 transition-colors text-center"
                >
                    {isFetching ? <LoadingIcon /> : 'Carregar Mais'}
                </button>
            </main>

        </>
    )
}