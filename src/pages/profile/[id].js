import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/pages/ProfilePage.module.css";
import COOKIE from "js-cookie";
import Profile from "../../components/Profile";
import RepositoryList from "../../components/RepositoryList";

const index = ({ data, setGitUsers }) => {
  let get_git_users = setGitUsers.length ? JSON.parse(setGitUsers) : [];
  const [repos, setRepos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (data) {
      fetchRepos(data.login);
    }

    let user_data = {
      avatar: data.avatar_url,
      name: data.name,
      login: data.login,
    };

    get_git_users = [...get_git_users, user_data];

    const git_users = get_git_users ? JSON.stringify(get_git_users) : null;

    COOKIE.set("git_users", git_users);
  }, [data]);

  const fetchRepos = async (name) => {
    const res = await fetch(`https://api.github.com/users/${name}/repos`);
    const data = await res.json();

    setRepos(data);
  };

  return (
    <div className={styles.sectionContainer}>
      <div>
        <Profile data={data} />
        <div onClick={() => router.back()} className={styles.returnContainer}>
          <h4 className={styles.return}>return now</h4>
        </div>
      </div>

      <div className={styles.repoContainer}>
        {repos.map((repo) => (
          <div key={repo.id}>
            <RepositoryList repo={repo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;

export const getServerSideProps = async ({ params, req }) => {
  const res = await fetch(`https://api.github.com/users/${params.id}`);
  const data = await res.json();

  let { git_users } = req.cookies;
  let setGitUsers = git_users ? git_users : [];

  return {
    props: { data, setGitUsers },
  };
};
