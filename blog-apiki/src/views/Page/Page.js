import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Page.module.scss";
import Header from "../../components/Header/Header";
import ClipLoader from "react-spinners/ClipLoader";

function List() {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      const resp = await axios.get(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
      );
      console.log(resp);
      setData(resp.data);
      setLoading(false);
    };
    getPost();
  }, [slug]);

  return (
    <div className={styles.pageContainer}>
      <Header />
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <ClipLoader color="#019be9" loading={isLoading} size={150} />
        </div>
      ) : (
        <div className={styles.pageContentContainer}>
          <h1 className={styles.title}>{data[0]?.title.rendered}</h1>
          <span
            className={styles.pageContent}
            dangerouslySetInnerHTML={{
              __html: data[0]?.content.rendered,
            }}
          ></span>
        </div>
      )}
    </div>
  );
}

export default List;
