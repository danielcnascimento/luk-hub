import moment from "moment";
import React, { useState, useEffect } from "react";
import styles from "../styles/components/RepositoryList.module.css";

const RepositoryList = ({ repo }) => {
  const [createAt, setCreatedAt] = useState("");
  console.log(repo);
  const [update, setUpdate] = useState("");

  useEffect(() => {
    getDates();
  }, [repo]);
  const getDates = () => {
    const creatDate = moment(repo.created_at).format("ll");
    const UpdateDate = moment(repo.updated_at).format("ll");

    setCreatedAt(creatDate);
    setUpdate(UpdateDate);
  };
  return (
    <div className={styles.container}>
      <span className={styles.header}>
        <a href={repo.html_url} target="_blank">
          <span>
            <h3>{repo.name}</h3>
            <p>created on {createAt}</p>
          </span>
        </a>
        {!repo.language ? (
          <div>
            <p> no language </p>
          </div>
        ) : (
          <div>
            <p>{repo.language}</p>
          </div>
        )}
      </span>

      <div className={styles.body}>
        <p>{repo.description}</p>
      </div>
      <span className={styles.footer}>
        <div>
          <p> last update {update} </p>
        </div>
      </span>
    </div>
  );
};

export default RepositoryList;
