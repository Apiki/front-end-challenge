import Styles from "../../styles/header.module.css";

import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className={Styles.header}>
        <Link href={"/blog"}>
          <img
            className={Styles.header__image}
            src="https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01.png"
            alt=""
          />
        </Link>
        <Link href={"/blog"}>
          <div className={Styles.header__link}>Home</div>
        </Link>
      </div>
    </>
  );
};

export default Header;
