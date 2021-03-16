import styles from "../styles/components/SearchBox.module.css";
import React, { Dispatch, SetStateAction } from "react";

interface SearchBoxProps {
  loadingRepos: Function;
  closeDrawer: Dispatch<SetStateAction<Boolean>>;
}

const SearchBox = ({ loadingRepos, closeDrawer }: SearchBoxProps) => {
  const onSearch = (text: React.ChangeEvent<HTMLInputElement>) => {
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
