import React, { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from "react-router-dom";
import { Helmet } from 'react-helmet'

function Post() {
  const [items, setItems] = useState([]);
  let { slug } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
      const data = await res.json();
      setItems(data);
    }

    getPosts();
  })

  return (
    <div className="main container">
      {items.map((item) => {
        return (
        <div key={item.title.rendered} className="posts__content postPage">
          <Helmet>
            <title>Apiki Blog - { item.yoast_head_json.og_title }</title>
            <meta name="description" content={item.yoast_head_json.og_description} />
          
          </Helmet>

          <div  className="">
            {
              item._embedded['wp:featuredmedia'] &&
              <img src={item._embedded['wp:featuredmedia'][0].source_url} alt=""/>
            }


            <h1 className="post__title">{item.title.rendered}</h1>
            <h3 className="post__text" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />


            <div className="dangerous__content" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />

          </div>
        </div>
        )

      })}
    </div>
  );
}

export default Post;