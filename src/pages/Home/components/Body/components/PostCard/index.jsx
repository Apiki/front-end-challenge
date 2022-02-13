import "./index.css"
import { Link } from "react-dom"
import parser from "html-react-parser"

import {
  BsPlayCircle
} from "react-icons/bs"

import {
  FaRegComment
} from "react-icons/fa"

const index = ({
  title,
  description,
  previewImage,
  format,
  authorName,
  authorLink,
  commentsAccount,
  slug,
  link,
  postDate,
  rendered,
}) => {

  return (
    <div className="post__card">
      {
        authorName ?
          <div className="post__card__label__ribbon">
            <span>By: </span><span>{authorName}</span>
          </div>
          :
          ""
      }
      {/* <Link to={link} > */}
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
      {/* </Link> */}
      <div className="post__card__description">
        <div className="post__card__description__title">
          <h3>{title}</h3>
        </div>
        <div className="post__card__description__info">
          {authorName === undefined ?
            <div>
              <span></span>
              <span className="post__card__description__author">{authorName}</span>
            </div>
            :
            <div>
              <span>By: </span>
              <a href={authorLink} className="post__card__description__author">{authorName}</a>
            </div>
          }
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
