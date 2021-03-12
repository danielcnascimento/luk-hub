import styles from "../styles/components/SearchBox.module.css";
import React, { useState } from "react";

const SearchBox = ({ loadingRepos, closeDrawer }) => {
  const [text, setText] = useState("");

  const onSearch = (text) => {
    loadingRepos(text.target.value);
  };

  return (
    <div className={styles.searchBoxContainer}>
      <div className={styles.heading}>
        <img src="search-asset.svg" />
        <p>
          luk<span>HUB</span>
        </p>
      </div>
      <div className={styles.searchInput}>
        <input
          onChange={onSearch}
          onClick={() => {
            closeDrawer(false);
          }}
          type="text"
          placeholder="Live Search"
        />
      </div>
    </div>
  );
};

export default SearchBox;
