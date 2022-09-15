import React from "react"
import "./styles.css"

const Preview = ({ title, dataPost, image }) => {
  let data = new Date(dataPost)
  let dataFormatada =
    data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()

  return (
    <div className="c-preview">
      <div className="c-preview__content">
        <img className="c-preview__img" src={image} alt="" />
        <div className="c-preview__position">
          <span className="c-preview__content__data">{dataFormatada}</span>
          <h2 className="c-preview__content__title">{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default Preview
