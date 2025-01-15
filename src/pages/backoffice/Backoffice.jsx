import styles from "./backoffice.module.css";
import { Link } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";

const Backoffice = () => {
  const { signOut, user } = useAuth();

  return (
    <article className={styles.backoffice}>
      <h1>BACKOFFICE</h1>
      <Link to='/'>Tilbage til frontend</Link>
      <div>
        <h1>Hej {user.name}</h1>
        <button onClick={() => signOut()}>Log ud</button>
      </div>
    </article>
  );
};

export default Backoffice;
