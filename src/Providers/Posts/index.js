import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const [totalPost, setTotalPost] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [countPages, setCountPages] = useState(1);

  useEffect(
    () => {
      axios
        .get("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
        .then((response) => {
          setPost(response.data);
          setTotalPost(response.headers["x-wp-total"]);
          setTotalPages(response.headers["x-wp-totalpages"]);
        });
    },
    setPost,
    setTotalPost,
    setTotalPages
  );

  const AddPosts = () => {
    const count = countPages + 1;
    if (countPages < totalPages) {
      console.log(countPages);

      const data = axios
        .get(
          `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${count}`
        )
        .then((response) => {
          setPost((state) => [...state, ...response.data]);
        });

      setCountPages(countPages + 1);
    } else {
      console.log("n deu");
      console.log(countPages);
    }
  };

  return (
    <PostContext.Provider value={{ post, totalPost, totalPages, AddPosts }}>
      {children}
    </PostContext.Provider>
  );
};
