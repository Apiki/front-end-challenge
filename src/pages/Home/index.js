import React, { useEffect, useState } from "react";

import getRecentPosts from "../../services/Posts/getRecentPosts";
import Spotlight from "../../components/Spotlight";

export default function Home() {
  const [mostRecentPost, setMostRecentPost] = useState();

  useEffect(() => {
    async function getMostRecentPost() {
      const recentPosts = await getRecentPosts();
      const newestPost = recentPosts[0];

      setMostRecentPost(newestPost);
    }

    getMostRecentPost();
  }, []);

  return (
    <div className="container">
      {mostRecentPost && <Spotlight mostRecentPost={mostRecentPost} />}
    </div>
  );
}
