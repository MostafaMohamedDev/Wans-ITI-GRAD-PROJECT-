import React from "react";
import { Link } from "react-router-dom";
import "./navtest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { getSession } from "../../helper";

const Navtest = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            className="nav navimg"
            src="Images/logo.png"
            alt="Description of the"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active home-link"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item " to="/clinc">
                    Clincs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/shelters">
                    Shelters
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/shop">
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Blogging">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faCartShopping} size="lg" />
              </Link>
            </li>
            {(getSession("login"))?
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                <FontAwesomeIcon icon={faCircleUser} size="lg" />
              </a>
            </li>:
              <li className="nav-item">
              <a className="nav-link" href="./login">
                <FontAwesomeIcon icon={faCircleUser} size="lg" />
              </a>
            </li>
            }   
            {(getSession("login"))?
            <li className="nav-item">
              <a className="nav-link" href="./logout">
              <FontAwesomeIcon icon={faRightFromBracket} size="lg"/>        
            </a>
            </li>:""
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navtest;
