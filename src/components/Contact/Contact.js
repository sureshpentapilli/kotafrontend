import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      <section className="bg1">
        {/* <img src={contact} alt="contact" className="image"></img> */}
        <h1 className="" style={{ color: "white" }}>
          Contact Us
        </h1>
      </section>

      <section className="bg2">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-style">
                <center>
                  <FaLocationDot className="icons" />
                  <p className="details">Meet Us</p>
                  <p className="details-text">
                    Plot No. 253_E, APIIC Growth Centre, Bobbili Mandal,
                    Vizianagaram District, Andhra Pradesh - 535 558.
                  </p>
                </center>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-style">
                <center>
                  <IoIosPhonePortrait className="icons" />
                  <p className="details">Call Us</p>
                  <p className="details-text">+91 63054 49108</p>
                  {/* <p className="details-text">+91 6300499894</p> */}
                </center>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-style">
                <center>
                  <MdEmail className="icons" />
                  <p className="details">Email Us</p>
                  {/* <p className="details-text">info@ramyamedsolutions.in</p> */}
                  <p className="details-text">kotamanagementservicespvtltd@gmail.com</p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg3">
        <div className="container" style={{ marginBottom: "30px" }}>
          <div className="row">
            <div className="col-md-6 contact-Us-form">
              <center>
                <p className="contact">
                  Contact Us
                  <div className="underline-container">
                    <div className="underline"></div>
                    <img
                      src="./images/pill.png"
                      alt="icon"
                      className="underline-icon"
                    />
                  </div>
                </p>
              </center>

              {/* Form from here */}
              <form style={{ padding: "2px" }}>
                <div
                  className="form-style"
                  style={{ display: "flex", gap: "5px" }}
                >
                  <div className="col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Name*"
                      required
                      name="Name"
                      style={{ width: "100%", boxSizing: "border-box" }}
                    ></input>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="Email*"
                      required
                      name="Email"
                      style={{ width: "98%", boxSizing: "border-box" }}
                    ></input>
                  </div>
                </div>
                <div className="form-style">
                  <input
                    type="number"
                    className="form-control"
                    id="Contact Number"
                    placeholder="Contact Number*"
                    required
                    name="Contact Number"
                    style={{ width: "100%", boxSizing: "border-box" }}
                  ></input>
                </div>
                <div className="form-style">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject*"
                    required
                    name="Subject"
                    style={{ width: "100%", boxSizing: "border-box" }}
                  ></input>
                </div>
                <div className="form-style">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Message*"
                    required
                    name="text"
                  ></textarea>
                </div>
                <center>
                  <button
                    className="btn custom-btn animate__animated animate__fadeIn"
                    style={{
                      borderRadius: "12px",
                      width: "40%",
                      boxSizing: "border-box",
                    }}
                  >
                    SEND MESSAGE
                  </button>
                </center>
              </form>
            </div>

            {/* map here */}

            <div className="col-md-6">
              <div className="map-container">
                <iframe
                  title="Address"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5276178377608!2d83.31378107417024!3d18.55023706826937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b9974e1325721%3A0xc34b919b4fdbdb60!2z4LCO4LCq4LC_4LCQ4LCQ4LC44LC_IOCwl-CxjeCwsOCxi-CwpOCxjSDgsLjgsYbgsILgsJ_gsLDgsY0sIOCwrOCxiuCwrOCxjeCwrOCwv-CwsuCwvw!5e0!3m2!1ste!2sin!4v1742198827346!5m2!1ste!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="map"
                ></iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5276178377608!2d83.31378107417024!3d18.55023706826937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b9974e1325721%3A0xc34b919b4fdbdb60!2z4LCO4LCq4LC_4LCQ4LCQ4LC44LC_IOCwl-CxjeCwsOCxi-CwpOCxjSDgsLjgsYbgsILgsJ_gsLDgsY0sIOCwrOCxiuCwrOCxjeCwrOCwv-CwsuCwvw!5e0!3m2!1ste!2sin!4v1742198827346!5m2!1ste!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </div>
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

export default Contact;
