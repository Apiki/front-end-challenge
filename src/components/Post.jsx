import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import parse from 'html-react-parser';

export default function Post ({img, title, author, date, excerpt, slug}) {
  return (
    <article className={styles.post}>
      <div className={styles.post__cover}>
        <Link to={slug} title={title}>
          <img src={img} alt={title} className={styles.post__coverImg}/>
        </Link>
      </div>
      <div className={styles.post__content}>

        <div className={styles.post__info}>
          <div>
            <span className={styles.post__infoAuthor}>
              {author}
            </span>
            <span className={styles.post__infoDate}>
              {date}
            </span>
          </div>
        </div>

        <div className={styles.post__contentData}>
          <h2 className={styles.post__title}>
            <Link to={slug} title={title}>
              {title}
            </Link>
          </h2>

          <div className={styles.post__excerpt}>
            {parse(excerpt)}
          </div>

          <div className={styles.post__tags}>
            <a href='https://google.com' className={styles.post__tag}>
              #tags
            </a>
            <a href='https://google.com' className={styles.post__tag}>
              #tags
            </a>
          </div>
        </div>

      </div>
    </article>
  )
}