import { useContext } from "react";
import { PostContext } from "../../Providers/Posts";

export const Button = ({ children, carregar }) => {
  const { AddPosts } = useContext(PostContext);

  return (
    <>
      {carregar && (
        <>
          <button
            onClick={() => {
              AddPosts();
            }}
          >
            {children}
          </button>
        </>
      )}
    </>
  );
};
