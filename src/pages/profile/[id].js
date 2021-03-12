import styles from "../../styles/pages/ProfilePage.module.css";
import Profile from "../../components/Profile";
import RepositoryList from "../../components/RepositoryList";
import COOKIE from "js-cookie";
import { useEffect } from "react";

const index = ({ data, git_users }) => {
  let get_git_users = JSON.parse(git_users);

  useEffect(() => {
    let user_data = {
      avatar: data.avatar_url,
      name: data.name,
      login: data.login,
    };

    get_git_users = [...get_git_users, user_data];

    const git_users = JSON.stringify(get_git_users);

    COOKIE.set("git_users", git_users);
  }, [data]);

  return (
    <div className={styles.sectionContainer}>
      <Profile />
      <RepositoryList />
    </div>
  );
};

export default index;

export const getServerSideProps = async ({ params, req }) => {
  const res = await fetch(`https://api.github.com/users/${params.id}`);
  const data = await res.json();

  const { git_users } = req.cookies;

  console.log(data);
  return {
    props: { data, git_users },
  };
};
