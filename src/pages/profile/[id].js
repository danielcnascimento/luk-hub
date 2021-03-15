import React, { useEffect, useState } from "react";
import styles from "../../styles/pages/ProfilePage.module.css";
import Profile from "../../components/Profile";
import RepositoryList from "../../components/RepositoryList";
import { useRouter } from "next/router";

const index = ({ data }) => {
  const [repos, setRepos] = useState([]);
  const router = useRouter();

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

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://api.github.com/users/${params.id}`);
  const data = await res.json();

  console.log(data);
  return {
    props: { data },
  };
};
