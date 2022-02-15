import "./index.css"
import { Link } from "react-router-dom"
import parser from "html-react-parser"

import {
  BsPlayCircle
} from "react-icons/bs"

import {
  FaRegComment
} from "react-icons/fa"

const index = ({
  title,
  previewImage,
  format,
  authorName,
  authorLink,
  commentsAccount,
  slug,
  postDate,
  rendered,
}) => {

  return (
    <div className="post__card">
      {
        authorName ?
          <div className="post__card__label__ribbon">
            <span>By: </span><a href={authorLink}>{authorName}</a>
          </div>
          :
          ""
      }
      <Link to={`/post/${slug}`} state={{ slug }} >
        <div className="post__card__img">
          {
            format === "video" ?
              <div className="post__card__img__overlay post__card__img__overlay--video">
                <BsPlayCircle size={70} />
              </div>
              :
              <div className="post__card__img__overlay"></div>
          }
          <img src={previewImage} alt="Post Card" />
        </div>
      </Link>
      <div className="post__card__description">
        <div className="post__card__description__title">
          <Link to={`/post/`} state={{ slug }} >
            <div>{title}</div>
          </Link>
        </div>
        <div className="post__card__description__info">
          <span className="post__card__description__date">{postDate}</span>
          <div className="post__card__description__comments__count">
            <FaRegComment size={14} />
            <span>{commentsAccount}</span>
          </div>
        </div>
        <div className=".post__card__description__abstract">{parser(rendered)}</div>
      </div>
    </div>
  )
}

export default index
