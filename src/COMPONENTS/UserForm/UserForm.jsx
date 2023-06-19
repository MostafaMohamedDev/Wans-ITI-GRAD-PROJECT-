  import React, { useEffect, useState } from "react";
  import styles from "./UserForm.module.css"; // Import the CSS module
  import { ApiContext } from "../../context/API-Context";
  import { useContext } from "react";

  const UserForm = () => {

    const {createData,createStatus} = useContext(ApiContext)
    const [confirmPassword, setConfirmPassword] = useState("");
    const [creationSuccess, setCreationSuccess] = useState(false);
    const [creationFail, setCreationFail] = useState(false);

    console.log(createStatus);

    

    const [newUser, setNewUser] = useState({
      name:"",
      password:"",
      email:"",
      type:"user"
  });



    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewUser({ ...newUser, [name]: value });
    }


    const handleAddUser = async (event) => {
      event.preventDefault();
      if (newUser.password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      else{
        await createData(newUser);
        setNewUser({
            name:"",
            password:"",
            email:"",
            type:"user"
      });
  
      setCreationSuccess(true)
      }
      setConfirmPassword("");
  };

  useEffect(() => {
    if (createStatus && createStatus.status) {
      setCreationSuccess(true);
      setCreationFail(false);
    } else if (createStatus && !createStatus.status) {
      setCreationSuccess(false);
      setCreationFail(true);
    }
  }, [createStatus]);



    return (
      <div className={styles.user}>
        <div className={styles.signup}>
          <div className={styles["signup-container"]} >
            <div className={`${styles["form-container"]}`}>
              <div className={styles["signup-form"]}>
                <h2 className="h2">Register</h2>
                {creationSuccess && (
                <div className="alert alert-success">
                  User created successfully!
                </div>
              )}
              {creationFail && (
                <div className="alert alert-danger">{createStatus.errors}</div>
              )}
                <form onSubmit={handleAddUser}>
                  <div className={styles["form-group"]}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input className={styles.input}
                     type="text"
                      id="name" 
                      name="name"
                      placeholder="Enter your name" 
                      value={newUser.name}
                      onChange={handleInputChange}
                      />
                  </div>
                  <div className={styles["form-group"]}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                    className={styles.input}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={newUser.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input
                    className={styles.input}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Create your password"
                      value={newUser.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label className={styles.label} htmlFor="password">Confirm Password</label>
                    <input
                    className={styles.input}
                      type="password"
                      id="password"
                      name="confirm"
                      placeholder="Create your password"
                      value={confirmPassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button className={styles.button} type="submit">Sign Up</button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default UserForm;
