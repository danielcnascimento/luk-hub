import React from "react";
import styles from "../styles/components/profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img />
      </div>
      <div className={styles.id}>
        <p>ID</p>
        <span>:</span>
        <p>hsk1jk1j</p>
      </div>
      <Title title="name" data="Hessa" />
      <Title title="email" data="example@email.com" />
      <Title title="location" data="location" />
      <Title title="followers" data={50} />
      <Title title="public repositories" data={1} />
    </div>
  );
};

const Title = ({ title, data }) => {
  return (
    <div className={styles.titleContainer}>
      <p>{title}</p>
      <p> {data} </p>
    </div>
  );
};
export default Profile;
