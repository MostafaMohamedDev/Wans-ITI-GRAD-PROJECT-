import React, { useState } from "react";
import styles from "./Login.module.css"; // Update the CSS file path
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../../context/API-Context";
const Login = () => {
  //Authentication
  const {login} =useContext(ApiContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logInFun = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className={styles.login}>
      <div className={styles["login-container"]}>
        <div className={`${styles["form-container"]} ${styles["login-form"]}`}>
          <h2 className={styles.h2}>Login</h2>
          <form onSubmit={logInFun}>
            <div className={styles["form-group"]}>
              <label className={styles.label} htmlFor="userEmail">
                UserEmail
              </label>
              <input
                className={styles.input}
                type="text"
                id="userEmail"
                name="email"
                placeholder="Enter your userEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles["form-group"]}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                className={styles.input}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={styles.button} type="submit">
              Login
            </button>
          </form>
          <p style={{ marginTop: "40px" }}>
            Don't have an account? <Link to="/user">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
