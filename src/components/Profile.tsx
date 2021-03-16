import React from "react";
import styles from "../styles/components/Profile.module.css";

interface ProfileProps {
  data: {
    id: string;
    name: string;
    email: string;
    location: string;
    follower: string;
    public_repos: string;
    avatar_url: string;
  };
}

const Profile = ({ data }: ProfileProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={data.avatar_url} />
      </div>
      <div className={styles.id}>
        <p>ID</p>
        <span>:</span>
        <p>{data.id}</p>
      </div>
      <Title title="name" data={data.name} />
      <Title title="email" data={data.email} />
      <Title title="location" data={data.location} />
      <Title title="followers" data={data.follower} />
      <Title title="public repositories" data={data.public_repos} />
    </div>
  );
};

interface TitleProps {
  title: String;
  data: String;
}

const Title = ({ title, data }: TitleProps) => {
  return (
    <div className={styles.titleContainer}>
      <p>{title}</p>
      <p> {data} </p>
    </div>
  );
};
export default Profile;
