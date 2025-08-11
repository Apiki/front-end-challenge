import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Página não encontrada</h2>
        <p className={styles.description}>
          Ops! A página que você está procurando não existe ou foi removida.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            Voltar para o início
          </Link>
        </div>
      </div>
      <div className={styles.illustration}>
        <div className={styles.errorCode}>404</div>
      </div>
    </div>
  );
}
