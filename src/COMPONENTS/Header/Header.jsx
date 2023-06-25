import React, { useEffect, useRef } from "react";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"; // Import Link component for internal navigation


//Component
const Header = () => {
  const videoRef = useRef(null);
  const [t,i18n]= useTranslation();

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
  
    if (videoRef.current) {
      videoRef.current.addEventListener("canplay", playVideo);
    }
  
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("canplay", playVideo);
      }
    };
  }, []);
  

  return (




    <div className={`${styles.headerContainer} `}>


      <div className={styles.videoContainer}>
        <div className={styles.darkLayer}></div>
        {/* New: Dark layer on top of the video */}
        <video ref={videoRef} loop muted className={styles.bgVid}>
          <source src="Images/video.mp4" type="video/mp4" />
          <source src="Images/video.webm" type="video/webm" />
          <source src="Images/video.ogg" type="video/ogg" />
        </video>
      </div>

      <div className={`${styles.contentContainer} container`}>
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-1 col-sm-12 ">
            <img
              className={`${styles.nav} ${styles.headimg} img-fluid ms-5`}
              src="Images/white.png"
              alt="Description of the image"
            />

            <div className={`${styles.headerContent}    text-center`}>
              <p>
              {t("  Where Pets are Family! Discover a comprehensive directory of pet clinics, expert articles, and helpful resources for optimal pet care. Join our community of passionate pet lovers and ensure your furry friends live their happiest, healthiest lives. Find trusted veterinarians, explore pet care topics, and connect with like-minded individuals at Wans. Your go-to destination for all things pets.")}
              </p>
              <div className="text-center mt-5  headerBtn">
                   <Link to="/Login" className={`btn2 ${styles.headerBtn} headerBtn mt-5  px-5`} style={{ textDecoration: "none" }}>
                        {t("Join Us")}
                    </Link>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
