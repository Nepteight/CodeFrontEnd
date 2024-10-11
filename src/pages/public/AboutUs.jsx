import React from "react";
// import styles
import "../../styles/public/aboutus/aboutus.css";
// import components
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <Navbar />
      <div className="aboutus-content">
        <div className="aboutus-text"></div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};
