import Head from "next/head";
import SearchBox from "../components/SearchBox";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage | LukHub - search repositories</title>
      </Head>
      <section>
        <div>
          <SearchBox />
        </div>
        <div></div>
      </section>
    </div>
  );
}
