import "./index.css"

import { useEffect } from "react"

import parser from "html-react-parser"
import convertDate from "../../../../utils/convertDate"

const index = ({
  postTitle,
  postImage,
  postExerpt,
  postContent,
  postDate,
  postModifiedDate,
  authorName,
  authorTitle,
  authorDescription,
  authorImage,
  authorLink,
  authorTwitter,
}) => {

  useEffect(() => {
    window.scrollTo(0, 400)

  }, []);

  return (<>
    <div className="post__content__container">
      <article className="post__body">
        <div className="post__body__author">
          {
            authorImage ?
              <a href={authorLink}>
                <img src={authorImage} alt="authorImage" />
              </a>
              :
              ""
          }
          <div>
            <a href={authorLink} >
              <p>{authorName}</p>
            </a>
            <div>
              <span>{convertDate(postDate)}</span>
              <span>last modified -</span>
              <span>{convertDate(postModifiedDate)}</span>
            </div>
          </div>
        </div>
        <h2>{postTitle}</h2>
        <h3>{parser(postExerpt)}</h3>
        <img className="post__body__image" src={postImage} alt="post image" />
        <div className="post__body__content">
          {parser(postContent)}
        </div>
      </article>
      <hr />
      {
        authorImage ?
          <div className="post__info__aside">
            <img src={authorImage} alt="author Image" />
            <p>{authorName}</p>
            <p>{authorTitle}</p>
            <p>{authorDescription}</p>
            <p>{authorTwitter}</p>
            <a href={authorLink}>Acessar Perfil</a>
          </div>
          :
          ""
      }
    </div>
  </>
  )
}

export default index