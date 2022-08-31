import styles from "./Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard/PostCard";
import ButtonPaginator from "../components/Button/ButtonPaginator";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const getBlogPosts = async () => {
      setLoading(true);
      const resp = await axios.get(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`
      );
      console.log(resp);
      const data = [];
      for (let el of resp.data) {
        if (el._embedded["wp:featuredmedia"]) {
          data.push(el);
        }
      }
      setPages(parseInt(resp.headers["x-wp-totalpages"]));
      setPosts(data);
      setLoading(false);
    };
    getBlogPosts();
  }, [page]);

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <img
        src="https://blog.apiki.com/wp-content/uploads/sites/2/2021/02/logo-apiki-blog-wordpress-e1613483808992.png"
        alt="apiki"
        className={styles.logo}
      />
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <ClipLoader color="#019be9" loading={isLoading} size={150} />
        </div>
      ) : (
        posts &&
        posts.map((post) => {
          return <PostCard post={post} key={post.id} />;
        })
      )}
      <ButtonPaginator
        page={page}
        pages={pages}
        onClickNext={nextPage}
        onClickPrev={prevPage}
      />
    </div>
  );
}

export default App;
