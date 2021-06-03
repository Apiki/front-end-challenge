import Link from "next/link"

import styles from "./styles.module.scss"

import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi"

const SocialLinks = () => {
  return (
    <div className={styles.containerLinks}>
      <Link href="https://www.facebook.com/ApikiWordPress">
        <a target="_blank">
          <FiFacebook color="white" />
        </a>
      </Link>
      <Link href="https://www.instagram.com/apikiwordpress/">
        <a target="_blank">
          <FiInstagram color="white" />
        </a>
      </Link>
      <Link href="https://twitter.com/apikiWordPress">
        <a target="_blank">
          <FiTwitter color="white" />
        </a>
      </Link>
      <Link href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA">
        <a target="_blank">
          <FiYoutube color="white" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/company/apiki/">
        <a target="_blank">
          <FiLinkedin color="white" />
        </a>
      </Link>
      <Link href="https://github.com/Apiki">
        <a target="_blank">
          <FiGithub color="white" />
        </a>
      </Link>
    </div>
  )
}

export default SocialLinks
