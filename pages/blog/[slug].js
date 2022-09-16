import Header from "../../components/header";
import Styles from "../../styles/blog.module.css";
import HeadSeo from "../../components/headSeo";

import ReactLoading from "react-loading";

import { useState } from "react";

const PostsSlug = (props) => {
  const [post, setPost] = useState(props.data[0]);
  console.log(props.data[0]._embedded.author[0].name);
  return (
    <>
      {post ? (
        <>
          <HeadSeo props={post && post?.yoast_head} />
          <Header />
          <div className={Styles.container}>
            <img
              className={Styles.image}
              src={post?._embedded["wp:featuredmedia"][0].source_url}
            />
            <div className={Styles.container__box__avatar}>
              <img
                className={Styles.container__avatar}
                src={post?._embedded.author[0].avatar_urls["96"]}
                alt=""
              />
              <p>Autor: {props.data[0]._embedded.author[0].name}</p>
            </div>
            <h1>{post?.title.rendered}</h1>
            <div
              className={Styles.container__html}
              dangerouslySetInnerHTML={{
                __html: post.content.rendered,
              }}
            />
          </div>
        </>
      ) : (
        <div className={Styles.container__loading}>
          <ReactLoading
            type={"spokes"}
            color={"#98bd13"}
            height={200}
            width={200}
          />
        </div>
      )}
    </>
  );
};

export default PostsSlug;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
  );
  const data = await res.json();

  return { props: { data } };
}
