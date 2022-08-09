import { NextPage } from "next";
import Image from "next/image";
import { AuthorSectionProps } from "../types/AuthorSection";
import styles from "../styles/AuthorSection.module.scss";

const AuthorSection: NextPage<AuthorSectionProps> = ({
  hideOnMobile = false,
  avatar,
  authorLink,
  authorName,
  date,
}) => {
  const post_date = new Date(date);
  const date_options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <>
      {authorName && (
        <span
          id={hideOnMobile ? styles.hideOnMobile : ""}
          className={styles.post_author_section}
        >
          <a className={styles.post_author_link} href={authorLink}>
            {avatar && (
              <Image
                className={styles.post_author_avatar}
                width={48}
                height={48}
                src={avatar}
              />
            )}
            <span className={styles.post_author_name}>
              {authorName ?? null}
            </span>
          </a>
          <span className={styles.post_date}>
            {post_date.toLocaleDateString("pt-BR", date_options) ?? null}
          </span>
        </span>
      )}
    </>
  );
};

export default AuthorSection;
