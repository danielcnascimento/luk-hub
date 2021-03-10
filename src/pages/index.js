import React, { useState } from "react";
import Head from "next/head";
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
      setRepos(res.data.items);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage | LukHub - search repositories</title>
      </Head>
      <section>
        <div>
          <SearchBox loadingRepos={loadRepos} />
        </div>
        {loading ? "loading.." : <div>{JSON.stringify(repos, null, 2)}</div>}
      </section>
    </div>
  );
}
