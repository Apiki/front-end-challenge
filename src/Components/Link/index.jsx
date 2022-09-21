import { Link_Index } from "./styled";

export const Link = ({ post, carregar, children, click }) => {
  return (
    <>
      {post && (
        <>
          <a href={`/post/${click}`}>{children}</a>
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
