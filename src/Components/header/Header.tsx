import React, { useState } from "react";
import { navItens } from "../../const/navItens";
import styles from "./header.module.scss";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={styles.mainHeader}>
      <div className={styles.headerNavigation}>
        <Link to={"/"}>
          <img
            src="https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01.png"
            alt="Apiki logo"
            className={styles.apikiLogo}
            onClick={() => setShowMenu(false)}
          />
        </Link>

        <BiMenu onClick={() => setShowMenu(!showMenu)} className={styles.biMenu} />
      </div>
      <div className={styles.navBarDesktop}>
        <ul className={styles.navUlDesktop}>
          {navItens.map((item, id) => (
            <li className={styles.navLiDesktop} key={id}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <nav className={styles.navContent}>
        <div className={showMenu ? styles.showHeaderNav : styles.hiddenHeaderNav}>
          <ul className={styles.navUl}>
            {navItens.map((item, id) => (
              <li className={styles.navLi} key={id}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
