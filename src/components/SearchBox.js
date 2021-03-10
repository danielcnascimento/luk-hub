import styles from "../styles/components/SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={styles.searchBoxContainer}>
      <div className={styles.heading}>
        <img src="search-asset.svg" />
        <p>
          luk<span>HUB</span>
        </p>
      </div>
      <div className={styles.searchInput}>
        <input type="text" placeholder="Live Search" />
      </div>
    </div>
  );
};

export default SearchBox;
