import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Clinc.css";
import { getCurrentTime } from "../../helper";
// import Navbar from "../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import clincImage from "../../images/clinc.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'

const Clinics = () => {
  const [clinics, setClinics] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState({});

  useEffect(() => {
    axios.get("http://ah.khaledfathi.com/api/service/filter/service_type/clinics").then((res) => {
      setClinics(res.data.data);
    });
  }, []);
  

  const handleCardClick = (clinic) => {
    setSelectedClinic(clinic);
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="clinc-section">
      <div className="ClincImage">
        <img
          src={clincImage}
          alt="Header"
          className="responsive-image"
          width="100%"
        />
      </div>
      <h2 className="clinic-header">Clinics</h2>
      <div className="clinic-parentCard container">
        <div className="row"   >
          {clinics.map((clinic , index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4 px-3"   >
              <div
                className="clinic-card " 
                onClick={() => handleCardClick(clinic)}
              >
                <div className="clinic-card-header"   data-aos="fade-up"  >
                  <img src={"http://ah.khaledfathi.com/"+clinic.image} alt="img" width="400px"  ></img>
                </div>
                <div className="clinic-card-body" >
                  <h3 className="ClinicName">{clinic.name}</h3>
                  <p className="clincPar">
                    {" "}
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color="#ff642e"
                    />{" "}
                    &nbsp; &nbsp;
                    {clinic.address}
                  </p>

                  <button
                    className="clinic-btn "
                    onClick={() => handleCardClick(clinic)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}

          {isPopupOpen && (
            <div className="clinic-popup">
              <div className="clinic-popup-content">
                <button className="clinic-close-btn" onClick={handlePopupClose}>
                  
                </button>
                <h3 className="popUp-ClinicName">{selectedClinic.name}</h3>
                <p>
                  <FontAwesomeIcon icon={faPhone} color="#ff642e" />
                  &nbsp; &nbsp;
                  {selectedClinic.phone}
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faLocationDot} color="#ff642e" />{" "}
                  &nbsp; &nbsp;
                  {selectedClinic.address}
                </p>
                <p>
                  <FontAwesomeIcon icon={faCalendarCheck} color="#ff642e" />{" "}
                  Avilable Appointements :{selectedClinic.working_hours}
                </p>
                <div>
                  <iframe
                    width="90%"
                    height="200"
                    title="location"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=20%20El%20Gezira%20Street,%20Zamalek,%20Cairo+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.maps.ie/distance-area-calculator.html">
                      measure area map
                    </a>
                  </iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">3</div>
          <div className="col-md-4">3</div>
          <div className="col-md-4">3</div>
        </div>
      </div> */}
    </div>
  );
};

export default Clinics;
