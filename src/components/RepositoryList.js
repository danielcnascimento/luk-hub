import React from "react";
import styles from "../styles/components/RepositoryList.module.css";

const RepositoryList = () => {
  return (
    <div className={styles.container}>
      <span className={styles.header}>
        <span>
          <h3>auth-up</h3>
          <p>created in jan 16</p>
        </span>
        <div>
          <p>javaScript</p>
        </div>
      </span>

      <div className={styles.body}>
        <p>
          🎞️ My-Story is a M.E.R.N. project, meant to be Fullstack that allows
          you to do all CRUD operations. It's a social media app mobile-first,
          beauty, …
        </p>
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
