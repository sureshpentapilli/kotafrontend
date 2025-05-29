import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

import { VentureData } from "../../components/ventures/VentureData";


const Venture = () => {
  const { id } = useParams();
  const aboutItem = VentureData.find((item) => item.id === parseInt(id));

  if (!aboutItem) {
    return <h2>Page Not Found</h2>;
  }

  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      <section>
        <div className="about-container">
          {/* Image with overlay text */}
          <div className="image-container">
            <img
              src={aboutItem.bannerImg}
              alt={aboutItem.title}
              className="img-fluid"
            />
            <h2 className="image-title">{aboutItem.title}</h2>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={aboutItem.img}
                alt="About"
                className="img-fluid image-animate"
              />
            </div>
            <div className="col-md-6">
              <p className="mt-3 text-animate about-des">
                {aboutItem.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Venture;
