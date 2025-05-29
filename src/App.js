import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import ProductList from "./components/products/ProductList";
import ProductDetails from "./components/products/ProductDetails";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/Contact/Contact";
import About from "./components/about/About";
import Service from "./components/services/Service"
import Resources from "./components/resources/Resources";
import Venture from "./components/ventures/Venture";

import RegisterNGO from "./components/register/NGOForm";
import RegisterApplicant  from "./components/register/ApplicantForm";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:id" element={<CardDetails />} /> */}
        {/* <Route path="/products/:categoryId" element={<ProductList />} /> */}
        {/* <Route path="/products/:categoryId/:subitemId" element={<ProductDetails />} /> */}
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service/:id" element={<Service/>}/>
        <Route path="/resource/:id" element={<Resources/>}/>
        <Route path="/venture/:id" element={<Venture/>}/>

        <Route path="/register/ngo" element={<RegisterNGO />} />
        <Route path="/register/applicant" element={<RegisterApplicant />} />





      </Routes>
    </Router>
  );
}

export default App;
