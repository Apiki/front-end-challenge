import { Link_Index } from "./styled";

export const Link = ({ post, carregar, children }) => {
  return (
    <>
      {post && (
        <>
          <a href="">{children}</a>
        </>
      )}
      {carregar && (
        <>
          <Link_Index href="">{children}</Link_Index>
        </>
      )}
    </>
  );
};
