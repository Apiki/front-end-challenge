import React, { useEffect } from 'react';
import { useBlogData } from '../../Contexts/BlogContext';

export default function PostCard() {

    const { fetch__data, blogData } = useBlogData()

    function handleDate(date: string) {
        const formattedDate = new Date(date).toLocaleDateString("pt-BR");
        return formattedDate;
    }

    useEffect(() => {
        fetch__data(1)
        console.log(blogData);
    }, [])

    return (
        <>
            <div className='flex py-8'>
                <div className="px-5 flex flex-wrap justify-center gap-3 md:w-full">
                    {blogData ? blogData.map(
                        (post) => (
                            <div
                                className="mb-4 w-full md:w-96"
                                key={post.guid.rendered}
                            >
                                <figure className=''>
                                    <img className='object-cover shadow-xl rounded-xl h-56 w-full md:w-96' src={post._embedded["wp:featuredmedia"][0].source_url} alt="" />
                                    <figcaption className='m-2 text-gray-500 text-opacity-80 text-sm'>{handleDate(post.date)} | {post.yoast_head_json.twitter_misc["Est. tempo de leitura"]}</figcaption>
                                </figure>
                                <div className="p-1">
                                    <h5 className="text-xl font-bold text-gray-900">
                                        {post.title.rendered}
                                    </h5>
                                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="mt-2 text-gray-500"></div>
                                </div>
                            </div>
                        )
                    ) : 'Loading Data'}
                </div>

                <nav className='hidden w-3/12 lg:block'>
                    <div className="sticky top-10 ">Sticky Menu</div>
                </nav>
            </div>
        </>
    )
}