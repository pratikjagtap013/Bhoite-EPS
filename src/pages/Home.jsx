import React from "react";
import landing1 from "../assets/landing-page.jpeg";
import landing2 from "../assets/landing-page-2.jpeg";
// import logoNavbar from "../assets/logo-navbar.jpeg";

import "../App.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Bhoite EPS Tech Innovations</h1>
      <section className="hero-section split-hero">
        <div className="hero-text">
          <p className="eps-tagline">
            Empowering Progress with Smart EPS Solutions
          </p>
          <div className="eps-info">
            BHOITE EPS TECH INNOVATIONS LLP, established in 2025, manufactures
            flame-retardant Expanded Polystyrene (EPS) panels for construction
            and packaging applications. <br />
            <br />
            <strong>Why Choose Bhoite EPS?</strong>
            <ul className="eps-features">
              <li>Advanced EPS manufacturing for diverse industries</li>
              <li>Eco-friendly, recyclable, and energy-efficient products</li>
              <li>Custom solutions for construction, packaging, and more</li>
              <li>Trusted by leading businesses and builders</li>
            </ul>
          </div>
        </div>
        <div className="hero-gallery">
          <img src={landing1} alt="EPS Construction" className="hero-img" />
          <img src={landing2} alt="EPS Packaging" className="hero-img" />
        </div>
      </section>
    </div>
  );
}

export default Home;
