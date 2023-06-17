import React from "react";
import "./navtest.css";

const Navtest = () => {
  return (
    <nav className="navbar nav navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
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
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active home-link"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active blog-link"
                aria-current="page"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            {/* <li
                className={`nav-item search-input ${
                  searchExpanded ? "expanded" : ""
                }`}
                onMouseEnter={handleSearchToggle}
                onMouseLeave={handleSearchToggle}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInput}
                  placeholder="Search"
                />
                {searchQuery && (
                  <span className="search-clear" onClick={clearSearch}>
                    &times;
                  </span>
                )}
                <a
                  className={`nav-link nav-link-icon ${
                    searchExpanded ? "active" : ""
                  }`}
                >
                  <FaSearch />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaShoppingCart />
                </a>
              </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register/Log in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navtest;
