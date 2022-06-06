import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles.scss";

export function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState([]);
  const baseApi = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${
    slug.split(".")[0]
  }`;
  const parser = new DOMParser();

  useEffect(() => {
    fetch(baseApi)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  console.log(post);
  // console.log(api);
  return (
    <div class="container-md">
      {post.map((post) => {
        return (
          <div class="row card" key={post.id}>
            <div class="col-md-12 center">
              <img
              width="100%"
              class="mt-3"
                src={post["_embedded"]["wp:featuredmedia"][0]["source_url"]}
              />
            </div>
            <div class="col-md-12 mt-5 mb-2">
              <h2>{post.title.rendered}</h2>
            </div>
            <div class="col-md-12"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

// <img src={post?.hero?.data?.attributes?.formats?.medium?.url} alt="Imagem de Paisagem"/>
