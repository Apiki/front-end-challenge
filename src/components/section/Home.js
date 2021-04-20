import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import Capa from "../../images/capa.png";
import "../css/Home.css";

function Home() {
  const { data, qntPage, page, newPage } = useContext(DataContext);
  const startOfSlice = 0;
  const endOfSlice = 40;
  return (
    <div className="container-home">
      {data.map(({ _embedded, title, slug, content }, index) =>
        _embedded["wp:featuredmedia"] ? (
          _embedded["wp:featuredmedia"].map(({ source_url }) => (
            <div data-testid="card-posts" key={index} className="card">
              <Link data-testid="link-to-post" to={`/interna/${slug}`}>
                <h2 data-testid="title-card">{title.rendered}</h2>
                <img
                  data-testid="featured-image"
                  src={source_url}
                  alt="destacated"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${content["rendered"].slice(
                      startOfSlice,
                      endOfSlice
                    )}${"<em><strong>...Leia mais</strong></em>"}`,
                  }}
                ></p>
              </Link>
            </div>
          ))
        ) : (
          <div data-testid="card-posts" key={index} className="card">
            <Link key={index} to={`/interna/${slug}`}>
              <h2>{title.rendered}</h2>
              <img src={Capa} alt="destacated" />
              <p
                dangerouslySetInnerHTML={{
                  __html: `${content["rendered"].slice(
                    startOfSlice,
                    endOfSlice
                  )}${"<em><strong>...Leia mais</strong></em>"}`,
                }}
              ></p>
            </Link>
          </div>
        )
      )}
      {Number(qntPage) !== page && (
        <button data-testid="button-load-more-posts" onClick={() => newPage()}>
          Carregar mais...
        </button>
      )}
    </div>
  );
}

export default Home;
