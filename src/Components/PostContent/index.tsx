import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDateFormatter } from '../../Contexts/DateFormatter';
import { usePostContext } from '../../Contexts/PostContext';

export function PostContent() {

    const { postContent, getPostContent } = usePostContext()
    const { handleDate } = useDateFormatter()
    const { slug } = useParams()

    useEffect(() => {
        !postContent.title && getPostContent(slug)
    }, [postContent])

    return (
        <div className='flex flex-col gap-4 my-6 mx-20'>
            {
                postContent.title ?
                    <>
                        <h1 className='font-bold text-5xl' > {postContent.title.rendered}</h1>
                        <div className='text-2xl text-gray-400' dangerouslySetInnerHTML={{ __html: postContent.excerpt.rendered }}></div>
                        <hr className='-my-3' />
                        <div className="flex justify-between text-gray-400">
                            <p>{postContent._embedded.author[0].name} | Tempo estimado de leitura: {postContent.yoast_head_json.twitter_misc["Est. tempo de leitura"]}</p>
                            <p>{handleDate(postContent.date)}</p>
                        </div>

                        <img
                            src={postContent._embedded['wp:featuredmedia'][0].source_url}
                            alt={postContent._embedded['wp:featuredmedia'][0].slug}
                            className='w-full object-cover shadow-xl rounded-xl'
                        />
                        <div
                            dangerouslySetInnerHTML={{ __html: postContent.content.rendered }}
                            className='flex flex-col gap-1 text-lg'
                        ></div>
                    </> :
                    'loading'
            }
        </div >
    )
}
