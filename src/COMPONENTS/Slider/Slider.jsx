import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const PartnersSlider = () => {
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
        Best <span classNAme="slidspan">Sellers</span>
      </h2>
      <Slider {...settings} className="partners-slider mt-4">
        <div className="item">
          <a href="#1">
            <img width="100%" src="images/9.jpg" alt="img1" />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead">PetsCare Collection</h3>
                <p>1500.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#1">
            <img width="100%" src="images/3.jpg" alt="img3" />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead">Groovy pet Carrier</h3>
                <p>450.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#1" className="border-0">
            <img width="100%" src="images/2.jpg" alt="img2" />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead">Ariika pet Bed</h3>
                <p>660.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#1">
            <img width="100%" src="images/4.jpg" alt="img1" />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead">Suprium Rubber Dog Toys</h3>
                <p>500.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#1">
            <img width="100%" src="images/11.jpg" alt="img1" />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead">Groovy pet Carrier-small</h3>
                <p>300.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#1">
            <img width="100%" src="images/10.jpg" alt="img1" />
            <div className=" layer">
              <div className="layer-content">
                <h3 className="slidHead">Dogcare Collection</h3>
                <p>1200.00 EGP</p>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#1">
            <img width="100%" src="images/7.jpg" alt="img1" />
            <div className="layer">
              <div className="layer-content">
                <h3 className="slidHead">Catmania Cat litter</h3>
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
