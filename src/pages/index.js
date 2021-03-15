import React, { useState } from "react";
import Head from "next/head";
import List from "../components/List";
import SearchBox from "../components/SearchBox";
import styles from "../styles/pages/Home.module.css";
import { searchRepo } from "../services/githubService";
import Link from "next/link";

export default function Home({ recent_visited }) {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  let get_git_users = recent_visited.length ? JSON.parse(recent_visited) : [];

  console.log(get_git_users);

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
          <p>You recently visited ...</p>
        </div>

        {get_git_users.length > 0 ? (
          get_git_users.map((user, index) => {
            return (
              <div
                key={index}
                className={styles.userContainer}
                data-tooltip={`click on ${user.login} pic to check.`}
              >
                <Link href="profile/id" as={`profile/${user.login}`}>
                  <img src={user.avatar} />
                </Link>
                <div>
                  <strong>{user.name}</strong>
                  <span>{user.login}</span>
                </div>
              </div>
            );
          })
        ) : (
          <p>Ops.. Nobody!</p>
        )}
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

export const getServerSideProps = async (ctx) => {
  let { git_users } = ctx.req.cookies;
  let recent_visited = git_users ? git_users : [];

  return {
    props: { recent_visited },
  };
};
