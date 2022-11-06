import axios from "axios";
import React, { useState, useEffect } from "react";
import { APIKI_API_INITIAL_PAGE } from "../../const/ulr";
import styles from "./initialPage.module.scss";
import { IProps } from "../../interface/interface";
import { Box, Button, Spinner } from "@chakra-ui/react";
import { Post } from "../../Components/postFigure/Post";

export const InitialPage: React.FC<IProps> = () => {
  const [data, setData] = useState<IProps[]>([]);
  const [newData, setNewData] = useState<IProps[]>([]);
  const [loadMore, setLoadMore] = useState(2);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    async function getData() {
      await axios
        .get(APIKI_API_INITIAL_PAGE)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
    getData();
  }, []);

  async function onClickFetch() {
    await axios
      .get(APIKI_API_INITIAL_PAGE + `&page=${loadMore}`)
      .then((response) => {
        setNewData((curr) => [...curr, ...response.data]);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
    setLoadMore(loadMore + 1);
  }

  return (
    <section className={styles.initialSection}>
      {isLoading ? (
        <Box className={styles.chakraBox}>
          <Spinner />
        </Box>
      ) : (
        <main className={styles.mainAllContent}>
          <header className={styles.mainTitle}>
            <h1 className={styles.mainH1}>Desenvolvimento WordPress</h1>
            <p className={styles.mainSubtitle}>Desenvolva seu negócio, desenvolvendo com WordPress.</p>
          </header>
          <div className={styles.mainContent}>
            {data?.map((item) => (
              <div className={styles.itemContainer} key={item.id}>
                <Post item={item} />
              </div>
            ))}
            <div className={styles.mainContent}>
              {newData?.map((item) => (
                <div className={styles.itemContainer} key={item.id}>
                  <Post item={item} />
                </div>
              ))}
            </div>
            {loadMore >= 17 ? (
              <Button colorScheme={"blackAlpha"} variant={"outline"}>
                Para o topo...
              </Button>
            ) : (
              <Button colorScheme={"blackAlpha"} onClick={onClickFetch}>
                Carregar mais...
              </Button>
            )}
          </div>
        </main>
      )}
    </section>
  );
};
