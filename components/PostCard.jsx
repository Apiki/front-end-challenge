import Link from "next/link";
import noImage from "../public/images/noimage.webp";

export const PostCard = ({
    image,
    title,
    slug,
    date
}) => {
    return (
        <Link href={`/post/${slug}`} title={title}>
            <article className="card">
                <img
                    src={image?.src?.length > 0 ? image.src : noImage.src}
                    className="card-image"
                    alt={image.alt}
                    width={'100%'}
                    height={"200px"}
                    loading="lazy"
                />
                <div className="card-body p-15">
                    <h3 className="card-title mb-15">{title}</h3>
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