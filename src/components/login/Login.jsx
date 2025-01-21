import { useState } from "react";
import { useAuthContext } from "../../context/useAuthContext";
import styles from "./login.module.css";

const Login = () => {
  const { error, signIn } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Forhindrer siden i at reloade
    try {
      await signIn(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Log ind</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Email'
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />

        <button type='submit'>Log ind</button>
      </form>
    </div>
  );
};

export default Login;
