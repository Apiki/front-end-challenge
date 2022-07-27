import Link from "next/link";

export const PostCard = ({
    image,
    title,
    slug,
    date
}) => {
    return (
        <Link href={`/post/${slug}`} title={title}>
            <article className="card">
                <img src={image.src} alt={image.alt} className="card-image"/>
                <div className="card-body p-15">
                    <h2 className="title-card mb-15">{title}</h2>
                    <small className="date-card">{date}</small>
                </div>
            </article>
        </Link>
    )
}

export const PostCardSkeleton = () => {
    return (
        <div className="card-skeleton skeleton">
            <div className="card-image-skeleton"></div>
            <div className="card-body-skeleton p-15">
                <div className="title-card-skeleton mb-15"></div>
                <div className="date-card-skeleton"></div>
            </div>
        </div>
    )
}