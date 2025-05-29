import React, { useEffect } from "react";
import $ from "jquery";
import "magnific-popup/dist/magnific-popup.css";
import "magnific-popup";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Gallery.css"

const Gallery = () => {
  useEffect(() => {
    $(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }, []);

  const images = [
    {
      src: "/images/card1.jpg",
      alt: "Sky Clouds",
    },
    {
      src: "/images/card2.jpg",
      alt: "Book",
    },
    {
      src: "/images/card3.jpg",
      alt: "Sunset Sky",
    },
    {
      src: "/images/card4.jpg",
      alt: "Sunny Day",
    },
    {
      src: "/images/card7.jpg",
        alt: "Sky Clouds",
      },
      {
        src: "/images/card8.jpg",
        alt: "Book",
      },
      {
        src: "/images/card9.jpg",
        alt: "Sunset Sky",
      },
      {
        src: "/images/card10.jpg",
        alt: "Sunny Day",
      },
  ];

  return (



    <>
    <div>
        <Navbar/>
    </div>
    <div className="position-relative">
      {/* Image */}
      <img
        src="/images/gallery.jpg"
        alt="gallery"
        className="img-fluid"
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      {/* Black Gradient Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark d-flex align-items-center justify-content-center">
        <h2 className="text-white fw-bold">Gallery</h2>
      </div>
    </div>
    <div className="container mt-4 mb-4">
      <div className="row popup-gallery g-3">
        {images.map((image, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div className="gallery_item position-relative">
              <a className="hover_affect_nlf" href={image.src} title={image.alt}>
                <img style={{height:"200px",width:"100%"}}
                  src={image.src}
                  alt={image.alt}
                  className="img-fluid rounded shadow"
                />
                <span className="singicon_btn_nlf position-absolute top-50 start-50 translate-middle text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-plus-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
};

export default Gallery;
