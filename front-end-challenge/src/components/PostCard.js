import React from 'react';

function PostCard({elem}) {
    return(
      <div className="col-md-4">
        <div className="card" key={elem.id} style={{width: "18rem"}}>
            <img className="card-img-top" src={elem._embedded['wp:featuredmedia'][0].source_url} alt="Imagem desctacada do post"/>
            <div className="card-body">
              <h5 className="card-title">{elem.slug}</h5>
              <a href={`/post/${elem.slug}`} className="btn btn-primary">Ler postagem.</a>
            </div>
        </div>
      </div>
    );
}

export default PostCard;
