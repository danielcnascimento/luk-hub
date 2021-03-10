import styles from "../styles/components/List.module.css";
import Link from "next/link";

const List = (props) => {
  const id = 1;

  return (
    <div>
      <div className={styles.listContainer}>
        <header>danielcnascimento</header>
        {/* <img src="https://github.com/danielcnascimento.png" alt="" /> */}
        <main>
          <p>email@test.com.br</p>
          <p>
            <span>17</span>&nbsp; repository(ies)
          </p>
          <span>javascript</span>
        </main>
        <Link href="/profile/id" as={`/profile/${id}`}>
          Visit
        </Link>
      </div>
    </div>
  );
};

export default List;
