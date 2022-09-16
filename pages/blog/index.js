import Styles from "../../styles/posts.module.css";
import Card from "../../components/Card";
import Header from "../../components/Header";

import { useState, useEffect } from "react";

import ReactLoading from "react-loading";
import axios from "axios";

const Posts = () => {
  const [cards, setCards] = useState();
  const [maxPages, setMaxPages] = useState();
  const [countPage, setCountPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getPost = async () => {
    const result = await axios.get(
      `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`
    );
    setTimeout(() => {
      setCards(result.data);
    }, 1000);
    setMaxPages(result.headers["x-wp-totalpages"]);
  };

  const knowMore = async () => {
    setCountPage(countPage + 1);

    if (countPage == maxPages - 1) {
      return;
    } else {
      setLoading(true);
      const { data } = await axios.get(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${countPage}`
      );
      setCards(cards.concat(data));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      {cards ? (
        <>
          <Header />
          <div className={Styles.post__flex}>
            {cards && cards.map((card, i) => <Card key={i} cards={card} />)}
          </div>
          <div className={Styles.post__knowMore}>
            {countPage == maxPages ? (
              ""
            ) : (
              <button
                onClick={() => knowMore()}
                className={Styles.button__knowMore}
              >
                {loading ? (
                  <p style={{ width: "30px", margin: "auto" }}>
                    <ReactLoading
                      Styles={{ margin: "auto" }}
                      type={"spokes"}
                      color={"#fff"}
                      height={30}
                      width={30}
                    />
                  </p>
                ) : (
                  " Saiba Mais"
                )}
              </button>
            )}
          </div>
        </>
      ) : (
        <div className={Styles.post__loading}>
          <ReactLoading
            type={"spokes"}
            color={"#98bd13"}
            height={200}
            width={200}
          />
        </div>
      )}
    </>
  );
};

export default Posts;
