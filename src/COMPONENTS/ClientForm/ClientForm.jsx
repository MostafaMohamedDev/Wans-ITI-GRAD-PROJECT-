import React, { useEffect, useRef, useState } from "react";
import styles from "./ClientForm.module.css";
import { ApiContext } from "../../context/API-Context";
import { useContext } from "react";

//Component
const ClientForm = () => {
  const {createData,createStatus} = useContext(ApiContext)
  const [confirmPassword, setConfirmPassword] = useState("");
  const [creationSuccess, setCreationSuccess] = useState(false);
  const [creationFail, setCreationFail] = useState(false);
  const fileInputRef = useRef(null);
  const [newUser, setNewUser] = useState({
    name:"",
    password:"",
    email:"",
    type:"",
    phone:"",
    address:""
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
  } else {
    const file = fileInputRef.current !== null ? fileInputRef.current : undefined;
    await createData(newUser, file);
    setNewUser({
      name: "",
      password: "",
      email: "",
      type: "",
      phone: "",
      address: ""
    });
    setCreationSuccess(true);
    setCreationFail(false);
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
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleAddUser}>
        <h2>Register</h2>
        {creationSuccess && (
                <div className="alert alert-success">
                  User created successfully!
                </div>
              )}
              {creationFail && (
                <div className="alert alert-danger">{createStatus.msg}</div>
              )}
        <div className={styles.formRow}>
          <div className={styles.formColumn}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="businessName">Business Name</label>
              <input
              className={styles.input}
                type="text"
                id="businessName"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                
              />
            </div>
            <div className={styles.formGroup}>
  <label className={styles.label} htmlFor="businessType">Business Type</label>
  <select
    className={styles.select}
    id="businessType"
    name="type"
    value={newUser.type}
    onChange={handleInputChange}
  >
    <option value="">Select Business Type</option>
    <option value="clinics">Clinic</option>
    <option value="shelter">Shelter</option>
    <option value="suppler">Supplier</option>
  </select>
</div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="contactPhone">Contact Phone</label>
              <input
              className={styles.input}
                type="tel"
                id="contactPhone"
                name="phone"
                value={newUser.phone}
                onChange={handleInputChange}
                
              />
            </div>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="contactEmail">Contact Email</label>
              <input
              className={styles.input}
                type="email"
                id="contactEmail"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="businessAddress">Business Address</label>
              <textarea
              className={styles.textarea}
                id="businessAddress"
                name="address"
                value={newUser.address}
                onChange={handleInputChange}
                
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">Password</label>
              <input
              className={styles.input}
                type="password"
                id="password"
                name="password"
                value={newUser.password}
                onChange={handleInputChange}
                
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="file">Upload File</label>
              <input
                className={styles.input}
                type="file"
                id="file"
                name="file"
                ref={fileInputRef}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">Confirm Password</label>
              <input
              className={styles.input}
                type="password"
                id="password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                
              />
            </div>
          </div>
        </div>
        <div className={styles.formGroup}>
          <button className={styles.button} type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
