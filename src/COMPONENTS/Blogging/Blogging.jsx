import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./Blogging.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import blogImage from "../../images/blog.jpg";
import axios from "axios";
import { constants } from "../../constants";

const URL = constants.API_HOST;

const Blogging = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios.get(URL + "/api/blog").then((res) => {
      setBlogData(res.data.data);
    });
  }, []);

  const [postId, setPostId] = useState("");

  return (
    <>
      <div className={styles.BlogSection}>
        <div>
          <img
            src={blogImage}
            alt="Header"
            className={styles["responsive-image1"]}
          />
        </div>
        {blogData.map((item, index) => (
          <Link
            to={"/Post/" + item.id}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <div>
              <div className={`${styles["blog-articals"]} container mt-5`}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={URL + "/" + item.image}
                        alt="Trendy Pants and Shoes"
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className={`${styles.h5} card-titleBlog`}>
                          {item.title}
                        </h5>
                        <p className={`${styles.p} card-text`}>
                          {item.abstract}
                        </p>
                        <div className={styles.rating}>
                          <FontAwesomeIcon
                            icon={faStar}
                            className={styles.star}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className={styles.star}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className={styles.star}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className={styles.star}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className={styles.star}
                          />
                        </div>
                        <p className={`${styles.p} card-text`}>
                          <small className="text-muted">{item.time}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blogging;
