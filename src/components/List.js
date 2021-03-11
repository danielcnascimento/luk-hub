import styles from "../styles/components/List.module.css";
import Link from "next/link";

const List = (props) => {
  return (
    <div>
      <div className={styles.listContainer}>
        <header>{props.repo.name}</header>
        <img src={props.repo.owner.avatar_url} alt={props.repo.owner.login} />
        <main>
          <p>by:&nbsp; {props.repo.owner.login}</p>
          <p>
            <span>{props.repo.stargazers_count}</span>&nbsp; star(s)
          </p>
          {props.repo.language ? (
            <span>{props.repo.language}</span>
          ) : (
            <span>not available</span>
          )}
        </main>
        <Link href="/profile/id" as={`/profile/${props.repo.owner.id}`}>
          Visit
        </Link>
      </div>
    </div>
  );
};

export default List;
