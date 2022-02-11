import "./index.css"

import {
  FaRegComment
} from "react-icons/fa"

const index = ({
  image,
}) => {
  return (
    <div className="post__card">
      <div className="post__card__title">
        <h2>Como criar Web Stotires no WordPress Como criar Web Stotires no WordPress</h2>
      </div>
      <div className="post__card__img">
        <div className="post__card__img__overlay"></div>
        <img src={image} alt="Post Card" />
      </div>
      <div className="post__card__description">
        <div className="post__card__description__info">
          <p>By: <span className="post__card__description__author">Leandro Vieira</span></p>
          <div className="post__card__description__comments__count">
            <FaRegComment size={14} />
            <span>2</span>
          </div>
        </div>
        <p className="post__card__description__abstract">O Google entrou pesado no jogo da audiência através do formato Stories. E você precisa saber criar Web Stories no...</p>
      </div>
    </div>
  )
}

export default index
