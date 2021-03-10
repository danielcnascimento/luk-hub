import Head from "next/head";
import Link from "next/link";
import SearchBox from "../components/SearchBox";
import styles from "../styles/pages/Home.module.css";
import List from "../components/List";

export default function Home() {
  const id = 1;

  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage | LukHub - search repositories</title>
      </Head>
      <section>
        <div>
          <SearchBox />
        </div>
        <div className={styles.secondSide}>
          <List />
          <List />
          <List />
          <List />
        </div>
      </section>
    </div>
  );
}
