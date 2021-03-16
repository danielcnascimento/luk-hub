import { useState } from "react";
import Head from "next/head";
import List from "../components/List";
import SearchBox from "../components/SearchBox";
import styles from "../styles/pages/Home.module.css";
import { searchRepo } from "../services/githubService";
import { GetServerSideProps } from "next";
import Link from "next/link";

interface HomeProps {
  recent_visited: string;
}

export default function Home({ recent_visited }: HomeProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<ListType["repo"][]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  let get_git_users: GetGitUsersType[] = recent_visited.length
    ? JSON.parse(recent_visited)
    : [];

  console.log(get_git_users);

  const loadRepos = async (searchText: String) => {
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
                  <img src={user.avatar_url} />
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let { git_users } = ctx.req.cookies;
  let recent_visited = git_users ? git_users : [];

  return {
    props: { recent_visited },
  };
};
