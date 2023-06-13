import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CardSection.module.css";

const CardSection = () => {
  return (
    <div className={styles.servicesSection}>
      <div className="container cardback">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <h4 className={styles.iconHeader}>
              Providing the{" "}
              <span>
                best <br /> quality services for your pets
              </span>
            </h4>
          </div>
        </div>

        <div className={styles.cardSection}>
          <div className="row">
            <div
              className={`${styles.cardCircle} ${styles.peMd3} ${styles.peSm0} col-lg-4 col-md-6 col-sm-12`}
            >
              <div className={`card ${styles.card}`}>
                <img
                  src="../Images/vetclinic.jpg"
                  alt="Image 1"
                  className={`card-img-top ${styles.cardImage}`}
                />
                <div className={`card-overlay ${styles.cardOverlay}`}></div>
                <div className={`card-body ${styles.cardBody}`}>
                  <h3 className={`card-title ${styles.cardTitle}`}>
                    Best <br /> Clinics
                  </h3>
                  <p className={`card-text ${styles.cardDescription}`}>
                    Trusted expertise for exceptional care.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${styles.cardCircle} ${styles.peMd3} ${styles.peSm0} ${styles.psMd3} ${styles.psSm0} col-lg-4 col-md-6 col-sm-12`}
            >
              <div className={`card ${styles.card}`}>
                <img
                  src="../Images/shoop.jpg"
                  alt="Image 2"
                  className={`card-img-top ${styles.cardImage}`}
                />
                <div className={`card-overlay ${styles.cardOverlay}`}></div>
                <div className={`card-body ${styles.cardBody}`}>
                  <h3 className={`card-title ${styles.cardTitle}`}>
                    Product Shopping
                  </h3>
                  <p className={`card-text ${styles.cardDescription}`}>
                    Premium selections for quality shopping.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${styles.cardCircle} ${styles.psMd3} ${styles.psSm0} col-lg-4 col-md-6 col-sm-12`}
            >
              <div className={`card ${styles.card}`}>
                <img
                  src="../Images/chelter.jpg"
                  alt="Image 3"
                  className={`card-img-top ${styles.cardImage}`}
                />
                <div className={`card-overlay ${styles.cardOverlay}`}></div>
                <div className={`card-body ${styles.cardBody}`}>
                  <h3 className={`card-title ${styles.cardTitle}`}>
                    Safe <br /> Havens
                  </h3>
                  <p className={`card-text ${styles.cardDescription}`}>
                    Discover shelters providing loving homes for pets.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
