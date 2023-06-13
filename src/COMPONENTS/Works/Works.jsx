import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Works.css";

const Works = () => {
  return (
    <div className="worksSection pt-5 mt-5">
      <div className="container">
        <div className="background-layer">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
             
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <h4 className="iconHead">How  <span> it Works</span> </h4>
            </div>
          </div>
        </div>

        <div className="workCards">
          <div className="cards-work">
            <div className="cardd red col-lg-4 col-md-6 col-sm-12">
              <img src="images/search.jpg" alt="Image 1" className="F-img" />
              <h3 className="works-title">Search Services</h3>
              <p className="works-description">
                Find what you're looking for with our efficient search services.
              </p>
            </div>
            <div className="cardd blue col-lg-4 col-md-6 col-sm-12">
              <img src="images/book.jpg" alt="Image 2" />
              <h3 className="works-title">Book & Pay</h3>
              <p className="works-description">
                Simplify your booking and payment process with our intuitive system.
              </p>
            </div>
            <div className="cardd green col-lg-4 col-md-12 col-sm-12">
              <img src="images/relax.jpg" alt="Image 3" />
              <h3 className="works-title ">Relax</h3>
              <p className="works-description">
                Effortless searching, smooth payments, relaxation as easy as breathing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
