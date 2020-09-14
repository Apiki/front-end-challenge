import React from 'react';

function PostCard({elem}) {
    return(
      <div className="col-md-4 mb-4 d-flex justify-content-center">
        <div className="card" key={elem.id} style={{width: "18rem"}}>
            <img
              className="card-img-top"
              src={elem['_embedded']["wp:featuredmedia"][0].source_url} 
              alt="Imagem desctacada do post"
            />
            <div className="card-body">
              <h6 className="card-title">{elem.slug}</h6>
              <p className="text-muted">{new Date(elem.date).toLocaleDateString()}</p>
              <hr/>
              <a href={`/post/${elem.slug}`} className="btn btn-primary">Ler postagem.</a>
            </div>
        </div>
      </div>
    );
}

export default PostCard;
