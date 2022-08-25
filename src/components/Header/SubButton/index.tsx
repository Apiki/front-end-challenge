import Link from "next/link";
import styles from "./styles.module.scss";

export function SubButton() {
  return (
    <Link href='/posts'>
      <a type="button" className={styles.subButton}>
        Click here
      </a>
    </Link>
  );
}
