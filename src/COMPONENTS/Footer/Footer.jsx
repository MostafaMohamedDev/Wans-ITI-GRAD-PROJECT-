import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone, faClock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="Loogoo footer-col">
            <img
              className="footer-logo"
              src="Images/white.png"
              alt="Description of the image"
            />
            <h5 className="logo-par">Fur-Ever Loved <br/> Fur-Ever Cared</h5>
          </div>

          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li className="contact-info">
                <FontAwesomeIcon className="footerIcon" icon={faMapMarkerAlt} /> 123 Main Street, City, Country
              </li>
              <li className="contact-info">
                <FontAwesomeIcon className="footerIcon" icon={faPhone} /> +1 (555) 123-4567
              </li>
              <li className="contact-info">
                <FontAwesomeIcon className="footerIcon" icon={faClock} /> Monday-Friday: 9 AM - 5 PM
              </li>
              <li className="contact-info">
                <FontAwesomeIcon className="footerIcon" icon={faEnvelope} /> example@example.com
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom ">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
