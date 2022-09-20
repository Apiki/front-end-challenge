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
          <a href="">{children}</a>
        </>
      )}
    </>
  );
};
