import React, { useState, useEffect } from "react";
import "./Shelter.css";
import headerImage from "../../images/adopt1.jpg";
import headerImageHover from "../../images/adopt2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCat } from '@fortawesome/free-solid-svg-icons';


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

  // const handleClickAll = () => {
  //   setShowOnlyDogCards(false);
  //   setShowOnlyCatCards(false);
  // };

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
    fetch("http://localhost:4001/shelters")
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
     <div>
      <div
        className="icon-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <section>
          <img
          style={{cursor:"grab"}}
            onClick={handleClickCat}
            src="./Images/cat.jpg"
            width="340px"
            height="280px"
            alt="Cat Icon"
          />
        </section>
        <h3 className="SHhead me-5" >Choose Your new <br/> friend</h3>
        <section>
          <img
          style={{cursor:"grab"}}
            onClick={handleClickDog}
            src="./Images/dog.jpg"
            width="280px"
            height="280px"
            alt="Dog Icon"
          />
        </section>
        {/* <section onClick={handleClickAll}>
          <span>Show All</span>
        </section> */}
      </div>
      </div>

      <div className="container">
        <div className="row">
          {filteredShelterCards.map((shelter) => (
            <div
              className="shelterCard col-lg-4 col-md-6 col-sm-12"
              key={shelter.id}
            >
              <a className="card">
                <img src={shelter.pet.image} className="card__image" alt="" />
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
                  <p className="card__description">{shelter.pet.description}</p>
                  <p className="cardMoreInfo1">{shelter.address}</p>
                  <p className="cardMoreInfo2">
                    <FontAwesomeIcon icon={faPhone} style={{marginRight:"10px"}} />
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
