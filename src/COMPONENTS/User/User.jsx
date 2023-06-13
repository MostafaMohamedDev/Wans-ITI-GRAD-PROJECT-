import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './User.module.css';

const User = () => {
  const navigate = useNavigate();

  const handleClientFormClick = () => {
    navigate('/clientform');
  };

  const handleUserFormClick = () => {
    navigate('/userform');
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <img src="../Images/busines2.jpg" alt="Business" className={styles.image} />
            <button
              onClick={handleClientFormClick}
              className={`${styles.btn} ${styles.businessBtn}`}
            >
              Business
            </button>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <img src="../Images/owner.jpg" alt="User" className={styles.image} />
            <button
              onClick={handleUserFormClick}
              className={`${styles.btn} ${styles.userBtn}`}
            >
              User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
