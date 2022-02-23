import Header from "../../components/Header";
import PostsCards from "../../components/Cards/PostCards";
import { CommentBox } from "../../components/CommentBox";

import "./style.css";

function Post() {
  return (
    <>
      <Header />
      <PostsCards />
      <CommentBox></CommentBox>
    </>
  );
}

export default Post;
