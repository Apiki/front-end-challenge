import { useEffect, useState } from "react";

import Header from "../../components/header/header.component";

import PostContent from "../../components/postContent/postContent.component";

const InnerPage = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(
      `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${window.location.pathname}`
    )
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      {post.map((post, i) => {
        console.log(post);

        const pathEmbedded = post._embedded["wp:featuredmedia"][0];
        return (
          <div key={i}>
            <Header className="inner" />
            <PostContent
              imgUrl={pathEmbedded.source_url}
              title={post.title.rendered}
              content={post.content.rendered}
            />
          </div>
        );
      })}
      <div className="post-container"></div>
    </div>
  );
};

export default InnerPage;
