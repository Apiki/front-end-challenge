import { TfiComment } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { IProps } from "../../interface/interface";
import styles from "../../Pages/initialPage/initialPage.module.scss";

interface IPost {
  item?: IProps;
}

export const Post: React.FC<IPost> = ({ item }) => {
  return (
    <figure className={styles.mainFigure}>
      <img
        src={item?._embedded["wp:featuredmedia"]?.[0]?.source_url}
        alt={item?._embedded["wp:featuredmedia"]?.[0]?.title?.rendered}
        className={styles.mainImg}
      />
      <figcaption className={styles.figureInfo}>
        <Link to={`${item?.slug}`}>
          <p className={styles.figureTitle}>{item?.title?.rendered}</p>
        </Link>
        <div className={styles.commentsInfo}>
          <TfiComment className={styles.TfiComment} />
          <p className={styles.comments}>{item?._embedded?.replies?.[0].length}</p>
          <p className={styles.readingTime}>
            Tempo de leitura - {item?.yoast_head_json?.twitter_misc["Est. tempo de leitura"]?.split("utos")}
          </p>
        </div>
      </figcaption>
    </figure>
  );
};
