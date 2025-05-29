import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-4 bg-footer">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Newsletter Section */}
          <div className="col-md-3">
            <h5 className="fw-bold text-uppercase">Newsletter</h5>
            <hr
              className="mb-3 mt-0 d-inline-block mx-auto"
              style={{ width: "60px", height: "2px", backgroundColor: "#000" }}
            />
            <p>
              Growth is all about taking the right decisions at the right time &
              so is Branding & Marketing. When done right, it fuels growth.
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
              <button className="btn btn-primary" type="submit">
                ➤
              </button>
            </div>
          </div>

          {/* Our Products Section */}
          <div className="col-md-3">
            <h5 className="fw-bold text-uppercase">Our Products</h5>
            <hr
              className="mb-3 mt-0 d-inline-block mx-auto"
              style={{ width: "60px", height: "2px", backgroundColor: "#000" }}
            />
            <ul className="list-unstyled-one" style={{ listStyleType: "none" }}>
              <li>ventures</li>
              <li>Services</li>
              <li>industries</li>
             
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="col-md-3">
            <h5 className="fw-bold text-uppercase">Social Links</h5>
            <hr
              className="mb-3 mt-0 d-inline-block mx-auto"
              style={{ width: "60px", height: "2px", backgroundColor: "#000" }}
            />
            <div>
              <a href="#" className="btn btn-primary btn-sm me-2">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-primary btn-sm me-2">
                <FaTwitter />
              </a>
              <a href="#" className="btn btn-primary btn-sm me-2">
                <FaInstagram />
              </a>
              <a href="#" className="btn btn-primary btn-sm">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="col-md-3">
            <h5 className="fw-bold text-uppercase">Address</h5>
            <hr
              className="mb-3 mt-0 d-inline-block mx-auto"
              style={{ width: "60px", height: "2px", backgroundColor: "#000" }}
            />
            {/* <p>
              📍Plot No. 253_E, APIIC Growth Centre, Bobbili Mandal,
              Vizianagaram District, Andhra Pradesh - 535 558.
            </p> */}
            <p>📞 +91 63054 49108 </p>
            {/* <p>📧 sales@ramyamedsolutions.in</p> */}
            {/* <p>📧 support@ramyamedsolutions.in</p> */}
            <p>📧 kotamanagementservicespvtltd@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
