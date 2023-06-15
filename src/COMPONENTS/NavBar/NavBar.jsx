/** @format */

import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import "./NavBar.css";

const Navbar = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchExpanded(!searchExpanded);
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
  };

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid nav-contain">
        <div className="navbar-brand">
          <img
            className="nav navimg"
            src="Images/logo.png"
            alt="Description of the"
          />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active home-link"
                aria-current="page"
                to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item dropdown ${
                servicesDropdownOpen ? "show" : ""
              }`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={toggleServicesDropdown}
                aria-expanded={servicesDropdownOpen}>
                Services
              </a>
              <ul
                className={`dropdown-menu ${
                  servicesDropdownOpen ? "show" : ""
                }`}>
                <li>
                  <Link
                    className="dropdown-item "
                    to="/clinc">
                    Clincs
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/shelters">
                    Shelters
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link  shop-link"
                aria-current="page"
                to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active blog-link"
                aria-current="page"
                to="/Blogging">
                Blog
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <div
              className={`nav-item search-input ${
                searchExpanded ? "expanded" : ""
              }`}>
              <a
                className={`nav-link nav-link-icon ${
                  searchExpanded ? "active" : ""
                }`}
                onClick={handleSearchToggle}>
                <FaSearch className="iccons" />
              </a>
              {searchExpanded && (
                <>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInput}
                    placeholder="Search"
                    className="form-control ps-3 me-2"
                  />
                  {searchQuery && (
                    <span
                      className="search-clear"
                      onClick={clearSearch}>
                      &times;
                    </span>
                  )}
                </>
              )}
            </div>
          </form>
          <ul className="navbar-nav ms-lg-2">
            <li className="nav-item">
              <Link to={"/cart"}
                className="nav-link pt-3 iccons"
                href="#">
                <FaShoppingCart className="mt-1" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                clLinkssName="nav-link"
                to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/User"
                onClick={() => navigate("/Signup")}>
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
