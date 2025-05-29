import React, { useEffect, useState } from "react";
import { FaClock, FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cardsData } from "../products/data";
import { motion } from "framer-motion";
// import { FaShieldAlt } from "react-icons/fa";
import { Award } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // Initialize all carousels
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach((carouselElement) => {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 5000,
        wrap: true,
      });
    });
  }, []);

  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      title: "QUICK RESPONSE",
      description:
        "We are a trustworthy company that supplies 100% original medicines to the customers.",
      icon: <FaClock className="card-icon pulse" />,
      image: "./images/quick.jpg", // Replace with actual image URL
    },
    {
      title: "100% SATISFACTION",
      description:
        "We offer assurance of quality on all the products supplied by us.",
      icon: <FaThumbsUp className="card-icon bounce" />,
      image: "./images/banner2.jpg",
    },
    {
      title: "CREATIVE SERVICE",
      description:
        "We have the support of certified professionals who work round the clock.",
      icon: <i className="fa fa-globe card-icon rotate" />,
      image: "./images/banner3.jpg",
    },
  ];

  const stats = [
    { icon: "bi-person", number: "24", label: "Brands" },
    { icon: "bi-bar-chart", number: "240", label: "Areas" },
    { icon: "bi-people", number: "250", label: "Clients" },
    { icon: "bi-trophy", number: "2", label: "Awards" },
  ];

  const branches = [
    {
      id: 1,
      name: "HARYANA",
      address:
        "Plot no-397, Hall no-1, Ground floor, Industrial Area, Phase-1, Panchkula, Haryana 134113",
    },
    {
      id: 2,
      name: "RAIPUR",
      address:
        "H.no 1369/65, Ward No-65, Professor Colony, Sector-2, Lane no-4, Raipur, CG-India",
    },
    {
      id: 3,
      name: "HANAMKONDA",
      address:
        "B No. 5-11-358, Pochammakunta, Naimnagar, Hanamkonda, Warangal - 506001, Telangana, India",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>
      {/* section one start */}
      <section>
        <div className="container-fluid p-0">
          {/* First Banner - Medical Solutions */}
          <div
            className="carousel slide"
            id="carouselMedical"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="banner-slide"
                  style={{
                    backgroundImage: `url("/images/banner12.avif")`,
                    height: "500px",
                    backgroundSize: "cover",
                    // backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <div className="container">
                    <h2 className="display-4 fw-bold mb-4 animated-title">
                    Driving Success Through Strategic Solutions.
                    </h2>
                    {/* <p
                      className="col-md-12 lead mb-4"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      Heal with Nature, Stay Strong Forever!
                    </p> */}
                    {/* <button className="btn btn-light btn-lg px-4">
                    Learn More
                  </button> */}
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="banner-slide"
                  style={{
                    backgroundImage: `url("/images/thoughtban1.jpg")`,
                    height: "500px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <div className="container">
                    <h2 className="display-4 fw-bold mb-4 animated-title">
                    Driving Success Through Strategic Solutions.
                    </h2>
                    {/* <p className="lead mb-4">Choose Nature, Choose Health!</p> */}
                    {/* <button className="btn btn-light btn-lg px-4">
                    Discover More
                  </button> */}
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="banner-slide"
                  style={{
                    backgroundImage: `url("/images/thoughtban2.jpg")`,
                    height: "500px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <div className="container">
                    <h2 className="display-4 fw-bold mb-4 animated-title">
                    Driving Success Through Strategic Solutions.
                    </h2>
                    {/* <p className="lead mb-4">100% Herbal Solutions</p> */}
                    {/* <button className="btn btn-light btn-lg px-4">
                    Discover More
                  </button> */}
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselMedical"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselMedical"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* section 1 close */}

      {/* section 2 start */}

      <section
        className="experience-section py-3"
        style={{
          backgroundColor: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);",

          // backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
        }}
      >
        <div className="container text-center">
          <h2
            className="fw-bold position-relative why-choose-us"
            style={{ color: "white" }}
          >
            ABOUT US
            <div className="underline-container">
              <div className="underline"></div>
              <img
                src="./images/pill.png"
                alt="icon"
                className="underline-icon"
              />
            </div>
          </h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="p-4">
                <div className="d-flex align-items-center mb-3">
                  {/* <Award
                    size={32}
                    className="me-2"
                    style={{ color: "white" }}
                  /> */}
                  {/* <h2 className="h3 mb-0" style={{ color: "white" }}>
                    10 Years of Excellence
                  </h2> */}
                </div>
                {/* <p className="lead mb-4">
                  The healthcare industry of the country Manufacturer of 100%
                  original and safe
                </p> */}
                <p className="about-text">
                  Kota Management Services Private Limited (KMS) is a powerhouse
                  in management consultancy, driven by a mission to transform
                  businesses with innovative, results-oriented solutions. We
                  specialize in delivering strategic, operational, and
                  organizational excellence, empowering ventures to navigate
                  complexities and seize opportunities in today’s ever-evolving
                  market. With a relentless focus on excellence, we ensure our
                  clients achieve sustainable growth and lasting success. Our
                  team of seasoned experts, armed with deep industry knowledge
                  and cutting-edge strategies, provides tailored solutions that
                  address the unique challenges of each business. From
                  optimizing operational efficiency to fostering market
                  expansion, KMS stands as a trusted partner, committed to
                  driving tangible results and unparalleled value. At KMS, we
                  believe in creating impact through precision and passion.
                  Built on the pillars of integrity, collaboration, and
                  innovation, we are dedicated to building long-term
                  partnerships and delivering measurable success. With KMS by
                  your side, your business is poised to rise to new heights
                </p>
                <button
                  className="btn custom-btn mt-3"
                  onClick={() => navigate("/about")}
                >
                  Learn More About Our Journey
                </button>
              </div>
            </div>
            <div className="col-md-6 mb-4 mb-md-0 position-relative">
              {/* Main Image */}
              <div
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.0)),url("./images/thoughtban2.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "500px",
                  borderRadius: "10px",
                  position: "relative",
                  zIndex: 2, // Ensure image stays above dots
                  margin: "20px 0px",
                }}
              />

              {/* Dots Background */}
              <div className="dots-background" />
            </div>

            {/* Right Section */}
          </div>
        </div>
      </section>

      {/* section 2 close */}

      {/* section 3 start */}
      {/* <section className="py-5 bg-light why-choose-section">
        <div className="container text-center">
          <h2 className="fw-bold position-relative why-choose-us">
            WHY CHOOSE US
            <div className="underline-container">
              <div className="underline"></div>
              <img
                src="./images/pill.png"
                alt="icon"
                className="underline-icon"
              />
            </div>
          </h2>
          <p className="text-muted">
            We are a trustworthy company that supplies 100% original medicines
            to the customers.
          </p>

          <div className="row justify-content-center">
            {cards.map((card, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card-container position-relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-image"
                  />
                  <div className="card-overlay p-3">
                    <div className="icon">{card.icon}</div>
                    <h5 className="fw-bold mt-3">{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* section 3 close */}

      {/* section 4 start */}
      <section className="card-section">
        <div className="container text-center">
          <h2
            className="section-title fw-bold position-relative why-choose-us"
            style={{ textAlign: "center" }}
          >
            {" "}
            Our Products
            <div className="underline-container">
              <div className="underline"></div>
              <img
                src="./images/pill.png"
                alt="icon"
                className="underline-icon"
              />
            </div>
          </h2>
          <div className="card-grid">
  {cardsData.slice(0, showAll ? cardsData.length : 6).map((product) => (
    <div key={product.id} className="flip-card">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <img src={product.img} className="custom-card-img" alt={product.title} />
          <h5 className="custom-card-title">{product.title}</h5>
        </div>
        
        {/* Back Side */}
        <div className="flip-card-back">
          <p className="custom-card-description">{product.description}</p>
          <button className="read-more-btn" onClick={() => navigate(`/products/${product.id}`)}>
            Read More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

          {/* <div className="text-center">
            <button
              className="explore-btn position-relative px-4 py-2 fw-bold rounded-pill shadow-lg border-0 overflow-hidden"
              onClick={() => setShowAll(!showAll)}
            >
              <span className="btn-text">
                {showAll ? "Show Less" : "Explore More"}
              </span>
              <div className="btn-glow position-absolute start-0 top-0 w-100 h-100"></div>
            </button>
          </div> */}
        </div>
      </section>
      {/* section 4 close */}

      {/* section 5 start */}
      <section>
        <div className="stats-section">
          <div className="container text-center">
            <div className="row justify-content-center">
              {stats.map((item) => (
                <div key={item.id} className="col-md-3">
                  <div className="stats-box">
                    <i className={`bi ${item.icon} stats-icon`}></i>
                    <h3>{item.number}</h3>
                    <p>{item.label}</p>
                    <div className="hover-line"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section 6 */}

      {/* <section className="text-center card-section-one">
        <h2
          className="fw-bold text-uppercase mb-3 position-relative why-choose-us"
          style={{ color: "white" }}
        >
          Our Branches{" "}
          <div className="underline-container">
            <div className="underline"></div>
            <img
              src="./images/pill.png"
              alt="icon"
              className="underline-icon"
            />
          </div>
        </h2>
        <p className="text-muted">
          We have the support of certified professionals who work round the
          clock to serve customers effectively.
        </p>
        <div className="container">
          <div className="row justify-content-center">
            {branches.map((branch) => (
              <div key={branch.id} className="col-md-4">
                <div className="branch-card shadow-lg p-4 mb-4">
                  <div className="icon-box" style={{ fontSize: "25px" }}>
                    📍
                  </div>
                  <h5 className="fw-bold">{branch.name}</h5>
                  <p className="branch">{branch.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section>
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
