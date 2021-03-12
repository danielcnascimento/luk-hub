import React, { useState } from "react";
import Head from "next/head";
import List from "../components/List";
import SearchBox from "../components/SearchBox";
import styles from "../styles/pages/Home.module.css";
import { searchRepo } from "../services/githubService";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  console.log(repos);

  const loadRepos = async (searchText) => {
    setLoading(true);
    const res = await searchRepo(searchText);
    if (res && res.data) {
      setLoading(false);
      setRepos(res.data.items);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage | LukHub - search repositories</title>
      </Head>
      <div
        className={`${styles.menu} ${styles.ripple}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img src="history.svg" />
      </div>
      <aside style={{ left: isOpen ? 0 : "-25rem" }}>
        <div
          className={`${styles.menu} ${styles.ripple}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src="close-icon-menu.svg" />
        </div>
        <div className={styles.drawerTitle}>
          <p>Voce visitou recentemente...</p>
        </div>
        <div className={styles.drawerList}>
          <h2>Ninguem</h2>
        </div>
      </aside>
      <section>
        <div className={styles.firstLayer}>
          <SearchBox loadingRepos={loadRepos} closeDrawer={setIsOpen} />
        </div>
        <div className={styles.secondLayer}>
          {loading
            ? "loading.."
            : repos.map((repo) => {
                return <List key={repo.id} repo={repo} />;
              })}
        </div>
      </section>
    </div>
  );
}
