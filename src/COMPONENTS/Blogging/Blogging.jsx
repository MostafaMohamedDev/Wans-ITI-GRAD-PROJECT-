import React from "react";
import styles from "./Blogging.module.css"; // Update the import statement

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


import blogImage from "../../images/blog.jpg";

const Blogging = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear", // Add smooth transition
  };

  return (
    <div className={styles.BlogSection}>
      <div>
        <img
          src={blogImage}
          alt="Header"
          className={styles["responsive-image1"]}
        />
      </div>

      
      <div className={`${styles["blog-articals"]} container mt-5`}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./images/blog1.jpg"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">ّ
              <div className="card-body">
                <h5 className={`${styles.h5} card-titleBlog`}>
                  Finding Your Perfect Fur-ever Friend
                </h5>
                
                <p className={`${styles.p} card-text`}>
                  Are you considering adding a furry friend to your family?
                  Choosing the right pet is crucial for a successful and
                  fulfilling companionship. Factors like lifestyle, living
                  situation, and personal preferences play a significant role in
                  this decision. Whether you're looking for a playful pup or a
                  low-maintenance feline, this guide will provide essential tips
                  to help you find your perfect fur-ever friend.
                </p>
                <div className={styles.rating}>
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                </div>
                <p className={`${styles.p} card-text`}>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./images/blog2.jpg"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className={`${styles.h5} card-titleBlog`}>
                  The Essentials of Pet Nutrition: Feeding Your Furry Friend
                  Right
                </h5>
                <p className={`${styles.p} card-text`}>
                  Are you considering adding a furry friend to your family?
                  Choosing the right pet is crucial for a successful and
                  fulfilling companionship. Factors like lifestyle, living
                  situation, and personal preferences play a significant role in
                  this decision. Whether you're looking for a playful pup or a
                  low-maintenance feline, this guide will provide essential tips
                  to help you find your perfect fur-ever friend.
                </p>
                <div className={styles.rating}>
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                </div>
                <p className={`${styles.p} card-text`}>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./images/blog-3.jpg"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className={`${styles.h5} card-titleBlog`}>
                  Creating a Pet-Friendly Home Making Your Space Safe and
                  Welcoming{" "}
                </h5>
                <p className={`${styles.p} card-text`}>
                  A Haven for Your Furry Pal: Designing a Pet-Friendly Home"
                  Paragraph: Your home should be a sanctuary for your beloved
                  pet, where they can roam, play, and relax without any hazards.
                  This blog post will offer valuable insights into creating a
                  pet-friendly environment, including tips on pet-proofing your
                  home, choosing pet-safe plants, establishing designated pet
                  areas, and ensuring their safety and comfort throughout the
                  house.
                </p>
                <div className={styles.rating}>
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                </div>
                <p className={`${styles.p} card-text`}>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./images/blog4.jpg"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className={`${styles.h5} card-titleBlog`}>
                  Exercise and Play: Keeping Your Pet Active and Happy
                </h5>
                <p className={`${styles.p} card-text`}>
                  Paws-itive Vibes: The Importance of Exercise and Play for Your
                  Pet" Paragraph: Regular exercise and playtime are essential
                  for maintaining your pet's physical and mental well-being.
                  From engaging in interactive games to exploring the great
                  outdoors, this blog post will highlight the importance of
                  exercise and play in preventing obesity, promoting
                  socialization, and strengthening the bond between you and your
                  furry friend.
                </p>
                <div className={styles.rating}>
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                  <FontAwesomeIcon icon={faStar} className={styles.star} />
                </div>
                <p className={`${styles.p} card-text`}>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogging;


