import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { APIKI_NAVIGATION } from "../../const/ulr";
import { IProps } from "../../interface/interface";
import { Avatar, Box, Button, Spinner } from "@chakra-ui/react";
import { BiComment } from "react-icons/bi";
import { formatDate } from "../../util/formatDate";
import axios from "axios";
import parse from "html-react-parser";
import styles from "./internalPage.module.scss";

interface IInternal {
  src?: React.ReactNode;
}

export const InternalPage: React.FC<IInternal> = (src) => {
  const [data, setData] = useState<IProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadMoreComments, setLoadMoreComments] = useState(5);
  const [avatarSrcError, setAvatarSrcError] = useState(false);
  const onError = useCallback(() => setAvatarSrcError(true), []);
  const imgSrcError = !src || avatarSrcError;
  let { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    async function getData() {
      await axios
        .get(APIKI_NAVIGATION + `${slug}`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
    getData();
  }, [slug]);

  function showMoreComments() {
    setLoadMoreComments(loadMoreComments + 5);
  }

  return (
    <main className={styles.internalPageMain}>
      {isLoading ? (
        <Box className={styles.chakraBox}>
          <Spinner />
        </Box>
      ) : (
        <section>
          <header className={styles.mainTitle}>
            <p className={styles.mainTitleInternal}>{data[0]?.title?.rendered}</p>
            <p className={styles.mainTitleSubTitle}>{data[0]?.yoast_head_json?.description}</p>
          </header>
          <div className={styles.authorInfo}>
            {imgSrcError ? (
              <Avatar src={data[0]?._embedded?.author} onError={onError} />
            ) : (
              <Avatar src={data[0]?._embedded?.author?.[0]?.avatar_urls?.[96]} onError={onError} />
            )}
            <div className={styles.authorNameDateInfos}>
              <p>
                by <b>{data[0]?._embedded?.author?.[0].name}</b>
              </p>
              <p className={styles.postData}>{formatDate(`${data[0]?.modified}`)}</p>
              <p className={styles.readingTime}>
                Tempo de leitura - {data[0]?.yoast_head_json?.twitter_misc["Est. tempo de leitura"]}
              </p>
            </div>
          </div>
          <hr />

          <div className={styles.internalContent}>
            <div className={styles.internalContentInfo}>
              <img
                src={data[0]?._embedded["wp:featuredmedia"]?.[0].source_url}
                alt={data[0]?._embedded["wp:featuredmedia"]?.[0].title?.rendered}
                className={styles.mainImg}
              />

              <div className={styles.contentRendered}>{parse(`${data[0]?.content?.rendered}`)}</div>
            </div>
          </div>

          <div className={styles.comments}>
            <div className={styles.commentsInfo}>
              <p className={styles.commentsTitle}>Comentários: {data[0]?._embedded?.replies?.[0]?.length}</p>
              {data[0]?._embedded?.replies === undefined ? (
                <p>Sem comentários</p>
              ) : (
                <div className={styles.allReplies}>
                  {data[0]?._embedded?.replies?.[0].slice(0, loadMoreComments).map((i: IProps) => (
                    <div className={styles.repliesUsers} key={i?.id}>
                      {imgSrcError ? (
                        <Avatar src={i?.author_avatar_urls} />
                      ) : (
                        <Avatar src={i?.author_avatar_urls[96]} />
                      )}
                      <div className={styles.userReplys}>
                        <p className={styles.authorName}>
                          {i?.author_name} - {formatDate(`${i?.date}`)}
                        </p>
                        <p className={styles.userReplie}>{parse(`${i?.content?.rendered}`)}</p>
                        <div className={styles.replyResponse}>
                          <BiComment />
                          <p className={styles.userResponse}>Responder</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className={styles.loadMoreButton}>
                {loadMoreComments <= data[0]?._embedded?.replies?.[0]?.length ? (
                  <Button colorScheme={"blackAlpha"} onClick={() => showMoreComments()}>
                    Mostrar mais comentários...
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
