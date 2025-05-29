import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./About.css";
import {
  FaAward,
  FaBalanceScale,
  FaLightbulb,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const About = () => {
  const values = [
    {
      title: "Excellence",
      desc: "We strive for outstanding results and set new benchmarks.",
      icon: <FaAward />,
    },
    {
      title: "Integrity",
      desc: "We operate with honesty, transparency, and accountability.",
      icon: <FaBalanceScale />,
    },
    {
      title: "Innovation",
      desc: "We challenge the ordinary to create extraordinary solutions.",
      icon: <FaLightbulb />,
    },
    {
      title: "Collaboration",
      desc: "We foster teamwork, communication, and shared success.",
      icon: <FaUsers />,
    },
    {
      title: "Customer Centricity",
      desc: "Our clients are at the core of everything we do.",
      icon: <FaHandshake />,
    },
  ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      {/* banner */}
      <div className="position-image">
        <img src="/images/about2.jpg" height={300} style={{ width: "100%" }} />
        {/* <div className="position-text">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center border-b-4 border-blue-500 inline-block">
            About Us
          </h1>
        </div> */}
      </div>

      {/* Header */}
      <section className="container my-5">
        <div className="row align-items-center">
          <h2
            className="text-primary fw-bold text-center"
            style={{ paddingBottom: "30px" }}
          >
            Company Overview
          </h2>

          {/* Image Section */}
          <div className="col-md-4">
            <img
              src="/images/md.png" // Replace with actual image
              alt="Company Overview"
              className="img-fluid rounded shadow-lg animate__animated animate__fadeInLeft"
              style={{ objectFit: "cover", width: "300px", height: "300px" }}
            />
            <h5 className="mt-3">S.naga veni</h5>
            <p>Managing Director</p>
          </div>

          {/* Text Section */}
          <div className="col-md-8">
            <div className="p-4 bg-light rounded shadow-sm animate__animated animate__fadeInRight">
              <p className="text-muted-1">
                Kota Management Services Private Limited (KMS) is a powerhouse
                in management consultancy, driven by a mission to transform
                businesses with innovative, results-oriented solutions. We
                specialize in delivering strategic, operational, and
                organizational excellence, empowering ventures to navigate
                complexities and seize opportunities in today’s ever-evolving
                market.
              </p>
            </div>
          </div>

          {/* Image Section */}

          {/* Text Section */}
          <div className="col-md-8">
            <div className="p-4 bg-light rounded shadow-sm animate__animated animate__fadeInRight">
              <p className="text-muted-1">
                Kota Management Services Private Limited (KMS) is a powerhouse
                in management consultancy, driven by a mission to transform
                businesses with innovative, results-oriented solutions. We
                specialize in delivering strategic, operational, and
                organizational excellence, empowering ventures to navigate
                complexities and seize opportunities in today’s ever-evolving
                market.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="/images/md1.jpeg" // Replace with actual image
              alt="Company Overview"
              className="img-fluid rounded shadow-lg animate__animated animate__fadeInLeft"
              style={{ objectFit: "cover", width: "300px", height: "300px" }}
            />
            <h5 className="mt-3">Gowthami</h5>
            <p>Director</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: "lightgray", padding: "50px,0px" }}>
        <div className="container my-5" style={{ padding: "50px,0px" }}>
          <div
            className="row align-items-center"
            style={{ padding: "50px,0px" }}
          >
            {/* Mission Section */}
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/mission.avif"
                className="img-fluid rounded-lg shadow-lg"
                width={350}
              />
            </motion.div>
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses through innovative strategies and
                solutions that drive sustainable growth and operational
                excellence.
              </p>
            </motion.div>
          </div>

          <div
            className="row align-items-center mt-5"
            style={{ padding: "50px,0px" }}
          >
            {/* Vision Section */}
            <motion.div
              className="col-md-6 order-md-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/vision.avif"
                className="img-fluid rounded-lg shadow-lg"
                // style={{ borderRadius:"50% 50% 40% 60% / 50% 40% 60% 50%"}}
                width={350}
              />
            </motion.div>
            <motion.div
              className="col-md-6 order-md-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To be a leading management consultancy recognized for
                transforming businesses and enabling success in a competitive
                landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      {/* Core Values Section */}
      <section className="mt-5 px-4">
        <h2 className="text-center text-primary fw-bold display-6 border-bottom border-primary pb-2">
          Core Values
        </h2>

        <div className="row mt-4 g-4">
          {values.map((value, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card text-center shadow-lg p-4 border-0 position-relative animate__animated animate__fadeInUp"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="text-primary display-4 mb-3">{value.icon}</div>
                <h3 className="fw-semibold text-dark">{value.title}</h3>
                <p className="text-muted-1">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
