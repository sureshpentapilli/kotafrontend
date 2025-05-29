import React, { useState } from "react";
import { Search } from "lucide-react";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import "./Navbar.css";
import { cardsData } from "../../components/products/data";
import { aboutData } from "../../components/about/AboutData"; // Import your data
import { ServicesData } from "../../components/services/ServicesData";
import { ResourcesData } from "../../components/resources/ResourcesData";
import { VentureData } from "../../components/ventures/VentureData";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = cardsData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      product.title !== "Quality Assurance"
  );

  return (
    <>
      {/* Top bar */}

      <div className="text-white py-2 background-small">
        <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start top-navbar">
          {/* Registration Number instead of Social Icons */}
          <div
            className="mb-2 mb-md-0"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Registration No: U70200AP2025PTC117652
          </div>

          {/* Scrolling Text */}
          <div className="scrolling-text">
            <p className="welcome">
              Welcome to Kota Management Services Private Limited—your trusted
              partner in innovative management consultancy. We specialize in
              empowering businesses with expert strategies, customized
              solutions, and operational excellence.
            </p>
          </div>

          {/* Contact Information with Icons */}
          <div className="d-flex flex-column flex-md-row gap-2 gap-md-4 mt-2 mt-md-0">
            <a
              href="mailto:kotamanagementservicespvtltd@gmail.com"
              className="text-white text-decoration-none d-flex align-items-center gap-1"
            >
              <BiEnvelope /> kotamanagementservicespvtltd@gmail.com
            </a>
            <a
              href="tel:+91 63054 49108"
              className="text-white text-decoration-none d-flex align-items-center gap-1"
            >
              <BiPhone /> +91 63054 49108
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <div className="navbar-container">
            <a className="navbar-logo" href="/">
              <img
                src="/images/kotalogo.jpg"
                alt="Heerachand Logo"
                className="brand-logo"
              />
            </a>
            <div className="text-content">
              <h5 className="brand-name">Kota Management Services</h5>
              {/* <h2 className="sub-title"> PHYTOPHARMACEUTICALS</h2> */}
              <p className="tagline">
                "Driving Success Through Strategic Solutions."
              </p>
            </div>
          </div>

          {/* Navbar Toggler (For Mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center text-lg-start">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/about"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()} // Prevent default dropdown toggle on click
                >
                  About Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  {/* You can add submenu items here if needed */}
                  <li>
                    <Link className="dropdown-item" to="/about">
                      About Us Home
                    </Link>
                  </li>
                </ul>
              </li>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="companyDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ventures
                    </a>
                    <ul className="dropdown-menu">
                      {VentureData.map((item) => (
                        <li key={item.id}>
                          <Link
                            className="dropdown-item"
                            to={`/venture/${item.id}`} // Dynamic Routing
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Company Profile Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="companyDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  services
                </a>
                <ul className="dropdown-menu">
                  {ServicesData.map((item) => (
                    <li key={item.id}>
                      <Link
                        className="dropdown-item"
                        to={`/service/${item.id}`} // Dynamic Routing
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="companyDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries
                </a>
                <ul className="dropdown-menu">
                  {ResourcesData.map((item) => (
                    <li key={item.id}>
                      <Link
                        className="dropdown-item"
                        to={`/resource/${item.id}`} // Dynamic Routing
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="registerDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={(e) => e.preventDefault()} // Prevent scrolling to top
                  >
                    Register
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="registerDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/register/ngo">
                        NGO
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/register/applicant">
                        Applicant
                      </Link>
                    </li>
                  </ul>
                </li>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/register/ngo">
                      NGO
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/register/applicant">
                      Applicant
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Search Input Field */}
            {searchOpen && (
              <div className="position-absolute top-50 start-50 translate-middle w-50">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <ul className="list-group position-absolute w-100 mt-2 bg-white shadow">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <li key={product.id} className="list-group-item">
                          <Link
                            to={`/products/${product.id}`}
                            className="text-dark"
                          >
                            {product.title}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="list-group-item text-muted">
                        No results found
                      </li>
                    )}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
