import "./index.css"

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
        <div className="post__card__info">
          <p>By Leandro Vieira</p>
          <span>( ) 2</span>
        </div>
        <p>O Google entrou pesado no jogo da audiência através do formato Stories. E você precisa saber criar Web Stories no...</p>
      </div>
    </div>
  )
}

export default index
