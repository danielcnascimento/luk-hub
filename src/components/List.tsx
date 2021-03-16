import styles from "../styles/components/List.module.css";
import Link from "next/link";

const List = ({ repo }: ListType) => {
  return (
    <div>
      <div className={styles.listContainer}>
        <header>{repo.name}</header>
        <img src={repo.owner.avatar_url} alt={repo.owner.login} />
        <main>
          <p>by:&nbsp; {repo.owner.login}</p>
          <p>
            <span>{repo.stargazers_count}</span>&nbsp; star(s)
          </p>
          {repo.language ? (
            <span>{repo.language}</span>
          ) : (
            <span>not available</span>
          )}
        </main>
        <Link href="/profile/id" as={`/profile/${repo.owner.login}`}>
          Visit
        </Link>
      </div>
    </div>
  );
};

export default List;
