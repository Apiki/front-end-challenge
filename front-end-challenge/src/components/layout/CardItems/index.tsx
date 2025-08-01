import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import type { Post } from "../../../types/Post";
import { formatDateTimeWithRelative } from "../../../utils/generics/formatDate";
import Image from "../../ui/Img";
import { Link } from "../../ui/Link";

function CardItems(post: Post) {
  const media = post.mediaUrl || "";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.slug}`);
  };

  return (
    <article
      key={post.id}
      className={`
        post-card
        flex flex-col       
        md:flex-row         
        items-stretch
        gap-6               
        md:gap-10           
        border-y border-gray-800
        py-4               
      `}
    >
      <Image
        className={`
          w-full            
          md:w-48           
          h-48              
          md:h-30           
          object-cover
          rounded-md       
          cursor-pointer
        `}
        src={media}
        alt={post.title}
        onClick={handleClick}
        loading="lazy"
      />

      <div className="flex flex-col justify-between flex-1">
        <h2
          className={`
            post-card__title
            text-lg cursor-pointer           
            md:text-2xl       
            font-medium !font-inter
            overflow-hidden text-ellipsis whitespace-normal
            [display:-webkit-box]
            [-webkit-box-orient:vertical]
            [-webkit-line-clamp:2]
          `}
          onClick={handleClick}
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        <footer
          className={`
            flex flex-col     
            sm:flex-row       
            items-start       
            sm:items-center   
            justify-between
            mt-4
          `}
        >
          <p className="text-sm text-gray-500 font-light !font-inter mb-2 sm:mb-0">
            {formatDateTimeWithRelative(post.date)}
          </p>
          <Link
            className={`
              post-card__link
              flex items-center gap-2 text-sm !no-underline
              border border-primary
              hover:bg-primary hover:text-white transition
              py-2 px-4
              w-full          
              sm:w-auto       
            `}
            href={`/post/${post.slug}`}
          >
            Ler mais <FaArrowRightLong size={14} />
          </Link>
        </footer>
      </div>
    </article>
  );
}

export default CardItems;
