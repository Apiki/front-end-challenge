import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
      .then((response) => {
        setPost(response.data);
      });
  }, setPost);

  return (
    <PostContext.Provider value={{ post }}>{children}</PostContext.Provider>
  );
};
