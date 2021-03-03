import styles from "../../styles/pages/ProfilePage.module.css";
import Profile from "../../components/Profile";
import RepositoryList from "../../components/RepositoryList";

const [id] = () => {
  return (
    <div className={styles.sectionContainer}>
      <Profile />
      <RepositoryList />
    </div>
  );
};

export default [id];
