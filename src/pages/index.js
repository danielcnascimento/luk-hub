import React, { useState } from "react";
import Head from "next/head";
import List from "../components/List";
import SearchBox from "../components/SearchBox";
import styles from "../styles/pages/Home.module.css";
import { searchRepo } from "../services/githubService";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  console.log(repos);

  const loadRepos = async (searchText) => {
    setLoading(true);
    const res = await searchRepo(searchText);
    if (res && res.data) {
      setLoading(false);
      setRepos(res.data);
    }
  };


  const id = 1;

  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage | LukHub - search repositories</title>
      </Head>
      <section>
        <div>
          <SearchBox loadingRepos={loadRepos} />
        </div>

        {loading
          ? "loading.."
          : repos.map((repo) => {
              return (
                <div key={repo.id} className={styles.secondSide}>
                  <List name={repo.name} />
                </div>
              );
            })}

      </section>
    </div>
  );
}
