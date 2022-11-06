import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Link to={"/"}>
        <img
          src="https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01.png"
          alt="Apiki logo"
          className={styles.apikiLogo}
        />
      </Link>

      <div className={styles.footerInfo}>
        <div className={styles.socialMedia}>
          <div className={styles.socialMediaIcons}>
            <BsFacebook className={styles.BsFacebook} />
            <BsTwitter className={styles.BsTwitter} />
            <BsYoutube className={styles.BsYoutube} />
          </div>
        </div>
      </div>
    </footer>
  );
};
