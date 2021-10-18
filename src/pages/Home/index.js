import React, { useEffect, useState } from "react";

import "./style.css";

import getRecentPosts from "../../services/Posts/getRecentPosts";
import Spotlight from "../../components/Spotlight";
import PostList from "../../components/PostList";

export default function Home() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [mostRecentPost, setMostRecentPost] = useState();

  useEffect(() => {
    // Get the most recent posts and store them
    async function getMostRecentPost() {
      const recentPostsList = await getRecentPosts();
      const newestPost = recentPostsList[0];

      setMostRecentPost(newestPost);
      setRecentPosts((prevPosts) => [...prevPosts, ...recentPostsList]);
    }

    getMostRecentPost();
  }, []);

  return (
    // TODO: add loading

    <div className="container">
      {mostRecentPost && (
        <>
          <Spotlight mostRecentPost={mostRecentPost} />
          <h2 className="homepage__transition-title">
            Fique por dentro dos posts mais recentes
          </h2>
          <PostList posts={recentPosts} />
        </>
      )}
    </div>
  );
}
