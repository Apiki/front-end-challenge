import { useEffect, useState } from "react";
import Loading from "../Loading";
import PostCard from "../PostCard";

function PostListing() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);

  useEffect(() => {
    function getMaxPages(response) {
      let isMaxPagesSync = maxPages === response.headers.get("x-wp-totalpages");
      !isMaxPagesSync &&
        setMaxPages(parseInt(response.headers.get("x-wp-totalpages")));
    }
    function checkIfAllPostsLoaded() {
      currentPage >= maxPages
        ? setAllPostsLoaded(true)
        : setAllPostsLoaded(false);
    }
    function fetchPosts() {
      fetch(
        "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=" +
          currentPage
      )
        .then((response) => {
          getMaxPages(response);
          return response.json();
        })
        .then((data) => {
          if (data) {
            let isPostsEmpty = posts.length === 0;

            isPostsEmpty && currentPage === 1
              ? setPosts(data)
              : setPosts([...posts, ...data]);
            checkIfAllPostsLoaded();
            setIsLoadingPosts(false);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchPosts();
  }, [currentPage, maxPages]);

  function loadMorePosts() {
    setIsLoadingPosts(true);
    setCurrentPage(currentPage + 1);
  }

  function renderPageTitle() {
    let categoryName = posts[0]._embedded["wp:term"][0][0].name;
    return <title>{categoryName}</title>;
  }

  function renderTitleCategory() {
    let categoryName = posts[0]._embedded["wp:term"][0][0].name;
    return <h1 className="PostListing-title">{categoryName}</h1>;
  }

  if (isLoading) return <Loading />;
  return (
    <div className="PostListing">
      {renderPageTitle()}
      <div className="PostListing-hero">
        <div className="container">{renderTitleCategory()}</div>
      </div>
      <div className="container">
        <div className="PostListing-grid">
          {posts.map((post) => {
            if (post.status === "publish")
              return <PostCard key={post.id} post={post} />;
            else return "";
          })}
        </div>
        {!allPostsLoaded && (
          <div className="PostListing-loadMoreWrapper">
            <button
              onClick={loadMorePosts}
              disabled={isLoadingPosts}
              className={
                "PostListing-loadMore " +
                (isLoadingPosts && "PostListing-loadMore__isDisabled")
              }
            >
              {isLoadingPosts ? "Carregando..." : "Carregar Mais..."}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostListing;
