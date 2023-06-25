import React from "react";
import { Link } from "react-router-dom"; // Import Link component for internal navigation
import styles from "./CardSection.module.css";
import { useTranslation } from 'react-i18next';
import Aos from "aos";
import 'aos/dist/aos.css'

// Component
const CardSection = () => {
  const [t, i18n] = useTranslation();
  Aos.init();

  return (
    <div className={styles.servicesSection}>
      <div className="container cardback">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <h4 className={styles.iconHeader}>
              {t("Providing the")}{" "}
              <span className={styles.span}>
                {t("best")} <br /> {t("quality services for your pets")}
              </span>
            </h4>
          </div>
        </div>

        <div className={styles.cardSection}>
          <div className="row d-flex justify-content-center">
            {/* First Card */}
            <div
              className={`${styles.cardCircle} ${styles.peMd3} ${styles.peSm0} col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center`}
            >
              <Link to="/Clinc" className={`card ${styles.card}`} data-aos="fade-up-right">
                <img
                  src="Images/vetclinic.webp"
                  alt="Im1"
                  className={`card-img-top ${styles.cardImage}`}
                />
                <div className={`card-overlay ${styles.cardOverlay}`}></div>
                <div className={`card-body ${styles.cardBody}`}>
                  <h3 className={`card-title ${styles.cardTitle}`}>
                    {t("Best")} <br /> {t("Clinics")}
                  </h3>
                  <p className={`card-text ${styles.cardDescription}`}>
                    {t("Trusted expertise for exceptional care.")}
                  </p>
                </div>
              </Link>
            </div>
            
            {/* Second Card */}
            <div
              className={`${styles.cardCircle} ${styles.peMd3} ${styles.peSm0} ${styles.psMd3} ${styles.psSm0} col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center`}
            >
              <Link to="/Shop"   className={`card ${styles.card}`} data-aos="fade-up">
                <img
                  src="Images/shoop.webp"
                  alt="Im2"
                  className={`card-img-top ${styles.cardImage}`}
                />
                <div className={`card-overlay ${styles.cardOverlay}`}></div>
                <div className={`card-body ${styles.cardBody}`}>
                  <h3 className={`card-title ${styles.cardTitle}`}>
                    {t("Product Shopping")}
                  </h3>
                  <p className={`card-text ${styles.cardDescription}`}>
                    {t("Premium selections for quality shopping.")}
                  </p>
                </div>
              </Link>
            </div>

            {/* Third Card */}
            <div className={`${styles.cardCircle} ${styles.psMd3} col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center`}>
              <Link to="/Shelters"  style={{ color: "white" }} className={`card ${styles.card}`} data-aos="fade-up-left">
                <img
                  src="Images/chelter.webp"
                  alt="Ima3"
                  className={`card-img-top ${styles.cardImage}`}
                />
                <div className={`card-overlay ${styles.cardOverlay}`}></div>
                <div className={`card-body ${styles.cardBody}`}>
                  <h3 className={`card-title ${styles.cardTitle}`}>
                    {t("Safe")} <br /> {t("Havens")}
                  </h3>
                  <p className={`card-text ${styles.cardDescription}`}>
                    {t("Discover shelters providing loving homes for pets.")}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
