import styles from "../../styles/pages/ProfilePage.module.css";
import Profile from "../../components/Profile";
import RepositoryList from "../../components/RepositoryList";
import axios from "axios";

const index = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.sectionContainer}>
      <Profile />
      <RepositoryList />
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
