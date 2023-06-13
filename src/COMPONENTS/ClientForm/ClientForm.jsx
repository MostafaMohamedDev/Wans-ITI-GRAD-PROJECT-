import React, { useState } from "react";
import styles from "./ClientForm.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const ClientForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  //Authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={signUp}>
        <h2>Register</h2>
        <div className={styles.formRow}>
          <div className={styles.formColumn}>
            <div className={styles.formGroup}>
              <label htmlFor="businessName">Business Name</label>
              <input
                type="text"
                id="businessName"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="businessType">Business Type</label>
              <input
                type="text"
                id="businessType"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contactPhone">Contact Phone</label>
              <input
                type="tel"
                id="contactPhone"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formGroup}>
              <label htmlFor="contactEmail">Contact Email</label>
              <input
                type="email"
                id="contactEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="businessAddress">Business Address</label>
              <textarea
                id="businessAddress"
                value={businessAddress}
                onChange={(e) => setBusinessAddress(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
