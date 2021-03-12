import React from "react";
import styles from "../styles/components/RepositoryList.module.css";

const RepositoryList = ({ repo }) => {
  console.log(repo);
  return (
    <div className={styles.container}>
      <span className={styles.header}>
        <span>
          <h3>{repo.name}</h3>
          <p>created on jan 16</p>
        </span>
        <div>
          <p>{repo.language}</p>
        </div>
      </span>

      <div className={styles.body}>
        <p>{repo.description}</p>
      </div>
      <span className={styles.footer}>
        <div>
          <p> last update </p>
        </div>
      </span>
    </div>
  );
};

export default RepositoryList;
