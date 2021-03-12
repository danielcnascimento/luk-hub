import React, { useEffect, useState } from "react";
import styles from "../../styles/pages/ProfilePage.module.css";
import Profile from "../../components/Profile";
import RepositoryList from "../../components/RepositoryList";
import axios from "axios";

const index = ({ data }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (data) {
      fetchRepos(data.login);
    }
  }, [data]);

  console.log(repos);

  const fetchRepos = async (name) => {
    const res = await fetch(`https://api.github.com/users/${name}/repos`);
    const data = await res.json();

    setRepos(data);
  };

  return (
    <div className={styles.sectionContainer}>
      <Profile data={data} />
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

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://api.github.com/users/${params.id}`);
  const data = await res.json();

  console.log(data);
  return {
    props: { data },
  };
};
