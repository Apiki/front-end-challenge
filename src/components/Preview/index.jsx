import React from "react";
import "./styles.css";

const Preview = ({ title, dataPost, image }) => {
  let data = new Date(dataPost);
  let dataFormatada =
    data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

  return (
    <div className="preview">
      <div className="preview__center">
        <img className="img" src={image} alt="" />
        <div className="preview__center__content">
          <span className="preview__data">{dataFormatada}</span>
          <h2 className="preview__title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Preview;
