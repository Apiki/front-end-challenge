import { useNavigate } from "react-router-dom";

import type { Post } from "../../../types/Post";
import { formatDateTimeWithRelative } from "../../../utils/generics/formatDate";
import Image from "../../ui/Img";

function MainNews(post: Post) {
  const media = post.mediaUrl;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.slug}`);
  };

  return (
    <article key={post.id} className="post-card pb-14">
      {media && (
        <Image
          className="post-card__img w-full h-full object-cover cursor-pointer"
          src={media}
          alt={post.title}
          onClick={handleClick}
          loading="lazy"
        />
      )}
      <h2
        className="post-card__title text-xl font-bold mt-4 cursor-pointer"
        dangerouslySetInnerHTML={{ __html: post.title }}
        onClick={handleClick}
      />
      <p>{formatDateTimeWithRelative(post.date)}</p>
    </article>
  );
}

export default MainNews;
