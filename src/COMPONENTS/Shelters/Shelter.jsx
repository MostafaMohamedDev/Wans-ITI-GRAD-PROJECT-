import React, { useState, useEffect } from "react";
import "./Shelter.css";
import headerImage from "../../images/adopt1.jpg";
import headerImageHover from "../../images/adopt2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const Shelters = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [shelterCard, setShelterCard] = useState([]);
  const [showOnlyDogCards, setShowOnlyDogCards] = useState(false);
  const [showOnlyCatCards, setShowOnlyCatCards] = useState(false);

  const handleClickDog = () => {
    setShowOnlyDogCards(true);
    setShowOnlyCatCards(false);
  };

  const handleClickCat = () => {
    setShowOnlyCatCards(true);
    setShowOnlyDogCards(false);
  };

  const handleClickAll = () => {
    setShowOnlyDogCards(false);
    setShowOnlyCatCards(false);
  };

  const filteredShelterCards = shelterCard.filter((shelter) => {
    if (showOnlyDogCards && shelter.type === "dog") {
      return true;
    }
    if (showOnlyCatCards && shelter.type === "cat") {
      return true;
    }
    if (!showOnlyDogCards && !showOnlyCatCards) {
      return true;
    }
    return false;
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    fetch("http://localhost:3004/shelters")
      .then((res) => res.json())
      .then((data) => setShelterCard(data));
  }, []);

  return (
    <div className="Shelters">
      <div
        className="shelterscover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={isHovered ? headerImageHover : headerImage}
          alt="Header"
          className="responsive-image w-100"
        />
      </div>
      <div className="container">
        <div
          className="icon-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <section>
          <div className="graph__wrapper" style={{ width: "100%", height: "auto", paddingBottom: "33.97%" }}>
  <svg width="100%" height="100%" viewBox="0 0 315 107" version="1.1" preserveAspectRatio="xMidYMid meet" style={{ overflow: "visible" }}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage">
      <path id="Path-1" className="path" fill="none" stroke="#ff642e" strokeWidth="5" strokeLinejoin="round" strokeMiterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81" />
      <path className="dashed" fill="none" stroke="white" strokeWidth="8" strokeLinejoin="round" strokeMiterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81" />

      <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#ff642e">
        <animateMotion rotate="auto" begin="1s" dur="1.6s" repeatCount="1" fill="freeze">
          <mpath xlinkHref="#Path-1" />
        </animateMotion>
      </polyline>
    </g>
  </svg>
</div>


            <img
              className="CatImg"
              style={{ cursor: "grab", width: "100%",marginTop:"-70px" }}
              onClick={handleClickCat}
              src="./Images/cat.jpg"
              width="500rem"
              height="300rem"
              alt="Cat Icon"
            />
          </section>
          <h3 className="SHhead">
            Click to Choose your New Friend
            <br />
            <h4
              onClick={handleClickAll}
              style={{
                cursor: "grab",
                marginTop: "2rem",
                color: "#ff642e",
                fontSize: "2rem",
              }}
            >
              Or Both
            </h4>
          </h3>

          <section>
            <img
              style={{ cursor: "grab",  width: "100%" }}
              onClick={handleClickDog}
              src="./Images/dog.jpg"
              width="500rem"
              height="350rem"
              alt="Dog Icon"
            />
          </section>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {filteredShelterCards.map((shelter) => (
            <div
              className="shelterCard col-lg-4 col-md-6 col-sm-12 justify-content-center"
              key={shelter.id}
            >
              <a className="card">
                <img
                  src={shelter.pet.image}
                  className="card__image"
                  alt=""
                />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      className="card__thumb"
                      src={shelter.pet.image}
                      alt=""
                    />
                    <div className="card__header-text">
                      <h3 className="card__title">{shelter.pet.name}</h3>
                      <span className="card__status">{shelter.name}</span>
                    </div>
                  </div>
                  <p className="card__description">
                    {shelter.pet.description}
                  </p>
                  <p className="cardMoreInfo1">{shelter.address}</p>
                  <p className="cardMoreInfo2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ marginRight: "10px" }}
                    />
                    {shelter.phone}
                  </p>{" "}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shelters;
