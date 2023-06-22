import React from "react";
import { Link } from "react-router-dom";
import "./navtest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';


const Navtest = () => {
  const [t,i18n]= useTranslation();
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            className="nav navimg"
            src="Images/logo.png"
            alt="Description of the"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                className="nav-link active home-link"
                aria-current="page"
                to="/"
              >
           {t("Home")}
              </Link>
            </li>



            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              {t("Services")} 
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item " to="/clinc">
                  {t("Clincs")}  
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/shelters">
                  {t("Shelters")}   
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/shop">
              {t("Shop")} 
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Blogging">
              {t("Blog")} 
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faCartShopping} size="lg" />
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <FontAwesomeIcon icon={faCircleUser} size="xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>



     <div >  {i18n.language==="ar"&&< input   type='button' value="AR" onClick={()=>{
      i18n.changeLanguage("en")
  }}></input>}
   {i18n.language==="en"&&<input     type='button' value="EN" onClick={()=>{
      i18n.changeLanguage("ar")
  }}></input>}  </div> 




    </nav>
  );
};

export default Navtest;
