import { BiUpArrowCircle } from "react-icons/bi";
import styles from "./styles.module.scss";

export function ButtonTop() {
    return(
        <a className={styles.linkTop} href="#top">
          <BiUpArrowCircle color="var(--gray-800)" size={30}/>
        </a>
    )
}