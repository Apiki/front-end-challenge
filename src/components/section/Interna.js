import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../services/API";
import Capa from "../../images/capa.png";
import "../css/Interna.css";

function Interna() {
  const params = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetchPost(params.id);
      setPost(response);
    }
    getData();
  }, [params.id]);
  return (
    <div>
      {post.map(({ _embedded, title, content }, index) =>
        _embedded["wp:featuredmedia"] ? (
          _embedded["wp:featuredmedia"].map(({ source_url }) => {
            return (
              <>
                <div className="container-details" key={index}>
                  <h1 data-testid="title-details-post">{title.rendered}</h1>
                  <img
                    data-testid="featured-details-image-post"
                    src={source_url}
                    alt="destacated"
                  />
                  <div
                    data-testid="content-details-post"
                    className="container-details-text"
                    dangerouslySetInnerHTML={{ __html: content["rendered"] }}
                  ></div>
                </div>
              </>
            );
          })
        ) : (
          <>
            <div className="container-details" key={index}>
              <h1>{title.rendered}</h1>
              <img src={Capa} alt="destacated" />
              <div
                className="container-details-text"
                dangerouslySetInnerHTML={{ __html: content["rendered"] }}
              ></div>
            </div>
          </>
        )
      )}
    </div>
  );
}

export default Interna;
