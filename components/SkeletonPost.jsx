export const SkeletonPost = () => {
    return (
        <>
            <div className="post-infos mb-15">
                <div className='post-title-skeleton'></div>
                <div className='post-title-skeleton'></div>
                <div className='post-excerpt-skeleton mb-15'></div>
                <div className='post-excerpt-skeleton mb-15'></div>
                <div className='post-date-skeleton mb-15'></div>
            </div>
            <div className='post-featured-image mb-15'>
                <div className='post-image-skeleton'></div>
            </div>
            {[...Array(30)].map((x, i) => (
                <div className='post-excerpt-skeleton mb-15' key={`skeleton-${i}`}></div>
            ))}
        </>
    )
}