import React from "react";
import { useParams, Link } from "react-router-dom";
import { cardsData } from "../../components/products/data";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./ProductList.css"


const ProductList = () => {
  const { categoryId } = useParams();
  const product = cardsData.find((p) => p.id.toString() === categoryId);

  if (!product) return <h2 className="text-center mt-5">Product Not Found</h2>;

  return (
    <>
      <Navbar />
      <div
        style={{
          background:
            "linear-gradient(to bottom,rgb(236, 239, 243),rgb(111, 140, 168))",
        }}
      >
        {/* Banner Section with Title Above */}
        {product.bannerImg && (
          <div className="text-center mb-4 position-relative">
            {/* Title Positioned Centered Over Image */}
            <div
              className="position-absolute w-100 d-flex align-items-center justify-content-center"
              style={{
                top: 0,
                left: 0,
                height: "100%",
                zIndex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional for readability
              }}
            >
              <h2
                className="text-white m-0"
                style={{ textTransform: "uppercase", fontWeight: "bold" }}
              >
                {product.title}
              </h2>
            </div>

            {/* Banner Image */}
            <img
              src={product.bannerImg}
              alt={`${product.title} Banner`}
              className="img-fluid w-100"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        )}

        <div className="container">{/* <p>{product.description}</p> */}</div>


   <div className="container">
      <div className="row" style={{ padding: "100px 0px" }}>
        {product.subitems.map((item) => (
          <div className="col-md-3" key={item.id} style={{ marginBottom: "15px" }}>
            <div className="card-container">
              {/* Image Section */}
              <div
                className="card-image"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>

              {/* Title & Read More (Always Visible) */}
              <div className="card-footer">
                <h5 className="text-uppercase fw-bold" style={{fontSize:"16px"}}>{item.title}</h5>
                <Link
                  to={`/products/${categoryId}/${item.id}`}
                  className="read-more-btn"
                >
                  Read More <FaArrowRight />
                </Link>
              </div>

              {/* Category & Description (Appear on Hover) */}
              <div className="card-hover-body">
                <p className="text-warning">Category: {product.title}</p>
                <p className="text-light">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
