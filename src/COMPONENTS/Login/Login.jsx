import React, { useState } from "react";
import styles from "./Login.module.css"; // Update the CSS file path
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../../context/API-Context";
import { setSession , getSession , removeSession ,  getCurrentTime } from "../../helper";
const Login = () => {
  //Authentication
  const {login} =useContext(ApiContext)
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [data, setData] = useState({
    email:"",
    password:""
});
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setData({ ...data, [name]: value });
}
  const logInFun = async (e) => {
    e.preventDefault();
    await login(data);
    console.log(data);
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
                value={data.email}
                onChange={handleInputChange}
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
                value={data.password}
                onChange={handleInputChange}
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
