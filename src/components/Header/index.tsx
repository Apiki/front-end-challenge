import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export function Header() {
const {asPath} = useRouter()
  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>blog.<span style={{color:'#61bafb'}}>Apiki</span></h1>
        <nav>
          <Link href="/">
            <a className={asPath === '/' ? styles.active : ''}>Home</a>
          </Link>
          <Link href="/posts">
            <a className={asPath === '/posts' ? styles.active : ''}>Post</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
