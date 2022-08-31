import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <img
        src="https://blog.apiki.com/wp-content/uploads/sites/2/2021/02/logo-apiki-blog-wordpress-e1613483808992.png"
        alt="apiki"
      />
      <Link to="/" className={styles.link}>
        Voltar a página inicial
      </Link>
    </div>
  );
}

export default Header;
