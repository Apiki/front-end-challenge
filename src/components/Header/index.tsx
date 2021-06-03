import Link from "next/link"
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi"

import styles from "./styles.module.scss"

import SocialLinks from "../SocialLinks"

const Header = () => {
  return (
    <header className={styles.container}>
      <img
        src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png"
        alt="blog-apiki"
      />

      <SocialLinks />
    </header>
  )
}

export default Header
