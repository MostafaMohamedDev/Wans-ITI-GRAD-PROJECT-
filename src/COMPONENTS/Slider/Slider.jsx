import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { useTranslation } from "react-i18next";
//component
const PartnersSlider = () => {
  const [t, i18n] = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    pauseOnHover: true,
  };

  return (
    <div className="slid-container slidSection">
      <h2 className="header">
        {t("Best")} <span className="slidspan"> {t("Sellers")} </span>
      </h2>
      <Slider {...settings} className="partners-slider mt-4">
        <div className="item">
          <a href="#1">
         
            <img
              width="100%"
              src="Images/9.webp"
              alt="img1"
            />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead"> {t("PetsCare Collection")} </h3>
                <p>1500.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#1">
            <img
              width="100%"
              src="Images/3.webp"
              alt="img3"
            />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead"> {t("Groovy pet Carrier")} </h3>
                <p>450.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">

          <a
            href="#1"
            className="border-0">
            <img
              width="100%"
              src="Images/2.webp"
              alt="img2"
            />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead"> {t("Ariika pet Bed")} </h3>
                <p>660.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#1">

            <img
              width="100%"
              src="Images/4.webp"
              alt="img1"
            />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead"> {t("Suprium Rubber Dog Toys")} </h3>
                <p>500.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#1">
            <img
              width="100%"
              src="Images/11.webp"
              alt="img1"
            />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead"> {t("Groovy pet Carrier-small")} </h3>
                <p>300.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#1">
            <img
              width="100%"
              src="Images/10.webp"
              alt="img1"
            />
            <div className=" layer">
              <div className="layer-content">
                <h3 className="slidHead"> {t("Dogcare Collection")} </h3>
                <p>1200.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#1">
            <img
              width="100%"
              src="Images/7.webp"
              alt="img1"
            />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead"> {t("Catmania Cat litter")} </h3>
                <p>900.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default PartnersSlider;
