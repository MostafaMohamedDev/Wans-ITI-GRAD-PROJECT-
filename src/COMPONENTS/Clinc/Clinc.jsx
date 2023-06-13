import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Clinc.css"
// import Navbar from "../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import clincImage from "../../images/clinc.jpg";

const Clinics = () => {
  const [clinics, setClinics] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState({});

  useEffect(() => {
    axios.get("http://localhost:4001/clinics").then((response) => {
      setClinics(response.data);
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
    <div>
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
        {clinics.map((clinic) => (
          <div
            key={clinic.id}
            className="clinic-card"
            onClick={() => handleCardClick(clinic)}
          >
            <FontAwesomeIcon
              icon={faCircleInfo}
              size="xl"
              color="#ff642e"
              style={{ position: "absolute", right: "12" , top : "10px" }}
              onClick={() => handleCardClick(clinic)}

            />

            <div className="clinic-card-header">
              <img src={clinic.img} alt="img" width="400px"></img>
            </div>
            <div className="clinic-card-body">
              <h3 className="ClinicName">{clinic.name}</h3>
            </div>
          </div>
        ))}
        {isPopupOpen && (
          <div className="clinic-popup">
            <div className="clinic-popup-content">
              <button className="clinic-close-btn" onClick={handlePopupClose}>
                X
              </button>
              <h3 className="ClinicName">{selectedClinic.name}</h3>
              <hp>
                <FontAwesomeIcon icon={faPhone} color="#ff642e" />
                &nbsp; &nbsp;
                {selectedClinic.phone}
              </hp>
              <p>
                {" "}
                <FontAwesomeIcon icon={faLocationDot} color="#ff642e" /> &nbsp;
                &nbsp;
                {selectedClinic.address}
              </p>
              <p>
                <FontAwesomeIcon icon={faCalendarCheck} color="#ff642e" />{" "}
                Avilable Appointements :<br></br>
                {selectedClinic.availableAppointments}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clinics;
