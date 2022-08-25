import type { NextPage } from "next";
import Head from "next/head";
import { SubButton } from "../src/components/Header/SubButton";
import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inicio | Apiki</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👍 Hey, welcome</span>

          <h1>
            blog.<span>Apiki</span>
          </h1>

          <p>access to all the publications</p>
          <SubButton />
        </section>

        <img className={styles.image} src="/images/avatar.png" alt="avatar" />
      </main>
    </>
  );
};

export default Home;
