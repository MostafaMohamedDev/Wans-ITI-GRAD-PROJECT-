import React, { useState } from "react";
import styles from "./Login.module.css"; // Update the CSS file path
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  //Authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logInFun = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.login}>
      <div className={styles["login-container"]}>
        <div className={`${styles["form-container"]} ${styles["login-form"]}`}>
          <h2 className={styles.h2}>Login</h2>
          <form onSubmit={logInFun}>
            <div className={styles["form-group"]}>
              <label className={styles.label} htmlFor="userEmail">UserEmail</label>
              <input
              className={styles.input}
                type="text"
                id="userEmail"
                placeholder="Enter your userEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles["form-group"]}>
              <label className={styles.label} htmlFor="password">Password</label>
              <input
              className={styles.input}
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={styles.button} type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
