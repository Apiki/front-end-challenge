import { useEffect, useState } from 'react'
import { UseAPI } from '../../contexts/apiContext'
import { relatedPostsData } from '../../utils/relatedQuantityPosts'
import { RelatedPostCard } from '../Cards/RelatedPostCard/RelatedPostCard'
import './index.css'
import './mediaqueries.css'
export function RelatedPostsSection() {
    const { page } = UseAPI()

    const [relatedPost, setRelatedPost] = useState<string[]>([])

    useEffect(() => {
        const relatedPostData = relatedPostsData
        setRelatedPost(relatedPost.concat(relatedPostData))
    }, [page])

    return (
        <div className='related-post-section'>
            {relatedPost.map((data, i) => {
                return (<RelatedPostCard key={i} />)
            })}
        </div>

    )
}