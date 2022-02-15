import "./index.css"
import { useEffect } from "react";

const index = () => {

  useEffect(() => {
    window.scrollTo(0, 400)

  }, []);

  return (<>
    <div className="post__content__container--loading">
      <article className="post__body--loading">
        <div className="post__body__author--loading">
          <div className="post__body__author__img--loading">
          </div>
        </div>
        <h2></h2>
        <h3></h3>
        <div className="post__body__image--loading"></div>
        <div className="post__body__content--loaging">
        </div>
      </article>
      <div className="post__info__aside--loading">
        <div> </div>
        <p> </p>
        <p> </p>
        <p> </p>
      </div>
    </div>
  </>
  )
}

export default index