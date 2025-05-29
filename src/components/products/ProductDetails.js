import React from "react";
import { useParams, Link } from "react-router-dom";
import { cardsData } from "../../components/products/data";
import subItemsData from "../../components/products/subItemsData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ProductDetails.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const ProductDetails = () => {
  const { categoryId, subitemId } = useParams();

  // Find the selected category
  const product = cardsData.find((p) => p.id.toString() === categoryId);
  if (!product) return <h2 className="text-center mt-5">Product Not Found</h2>;

  // Find the selected subitem
  const subitem = product.subitems.find((s) => s.id.toString() === subitemId);
  if (!subitem) return <h2 className="text-center mt-5">Subitem Not Found</h2>;

  // Find full subitem details using ID match
  const subitemDetails = subItemsData.find(
    (s) => s.id.toString() === subitemId
  );

  // Filter categories: Exclude "Quality Assurance" & Ensure only one "Neuropathy"
  const seenCategories = new Set();
  const filteredCategories = cardsData
    .filter((cat) => cat.title !== "Quality Assurance")
    .filter((cat) => {
      if (cat.title === "Neuropathy") {
        if (seenCategories.has("Neuropathy")) return false;
        seenCategories.add("Neuropathy");
      }
      return true;
    });

  return (
    <>
      <Navbar />

      <div
        style={{
          background:
            "linear-gradient(to bottom,rgb(236, 239, 243),rgb(111, 140, 168))",
        }}
      >
        {/* Banner Image */}
        {subitem.bannerImg && (
          <div className="text-center mb-4 position-relative">
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
                {subitem.title}
              </h2>
            </div>
            <img
              src={subitem.bannerImg}
              alt={`${subitem.title} Banner`}
              className="img-fluid w-100"
              style={{
                maxHeight: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        )}
        <div className="container">
          <div className="row" style={{ padding: "100px 0px" }}>
            <div className="col-md-4">
              <div className="position-sticky" style={{ top: "0px" }}>
                <center>
                  <p
                    className="contact"
                    style={{ textTransform: "uppercase", fontSize: "25px" }}
                  >
                    CATEGORIES
                    <div className="underline-container">
                      <div className="underline"></div>
                      <img
                        src="/images/pill.png"
                        alt="icon"
                        className="underline-icon"
                      />
                    </div>
                  </p>
                </center>
                <ul className="list-group">
                  {filteredCategories.map((category) => (
                    <li
                      key={category.id}
                      className={`list-group-item list-group-item-action shadow-sm transition-effect ${
                        category.id.toString() === categoryId
                          ? "active-category"
                          : ""
                      }`}
                    >
                      <Link
                        to={`/products/${category.id}`}
                        className="text-decoration-none d-block w-100 h-100 text-center py-2"
                      >
                        {category.title}
                        <FaAngleDoubleLeft className="ms-2" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subitem Details in col-md-8 */}
            <div className="col-md-8">
              <h2 style={{ textTransform: "uppercase" }}>{subitem.title}</h2>
              <img
                src={subitem.img}
                alt={subitem.title}
                className="img-fluid mb-3"
                style={{ maxWidth: "300px", borderRadius: "10px" }}
              />
              <p>{subitem.description}</p>

              {subitemDetails && (
                <div>
                  <p>
                    <strong>Category:</strong> {subitemDetails.category}
                  </p>
                  <p>
                    <strong>price and quantity</strong> {subitemDetails.price}
                  </p>
                  <p>
                    <strong>Date:</strong> {subitemDetails.date}
                  </p>
                  <p>
                    <strong>trade</strong> {subitemDetails.trade}
                  </p>
                  <p>
                    <strong>description</strong> {subitemDetails.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
