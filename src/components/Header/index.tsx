import Link from "next/link"

import styles from "./styles.module.scss"

import SocialLinks from "../SocialLinks"

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a>
          <img
            src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png"
            alt="blog-apiki"
          />
        </a>
      </Link>

      <SocialLinks />
    </header>
  )
}

export default Header
