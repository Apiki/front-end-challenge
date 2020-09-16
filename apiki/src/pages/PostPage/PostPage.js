import React from "react";
import Header from "../../components/Header/Header";
import Post from "../../components/PostPage/Post";
import BackButton from '../../components/Buttons/BackButton';
import Footer from "../../components/Footer/Footer";

const PostPage = () => {
  return (
    <div>
      <Header />
      <Post />
      <BackButton />
      <Footer />
    </div>
  );
};

export default PostPage;
