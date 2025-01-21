import { Link } from "react-router-dom";

const Home = () => {
  return (
    <article>
      <h1>Forsiden</h1>

      <Link to='/backoffice'>Gå til backoffice</Link>
    </article>
  );
};

export default Home;
