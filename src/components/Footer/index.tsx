import styles from "./styles.module.scss"

import SocialLinks from "../SocialLinks"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <img
        src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png"
        alt="blog-apiki"
      />
      <SocialLinks />
    </footer>
  )
}

export default Footer
