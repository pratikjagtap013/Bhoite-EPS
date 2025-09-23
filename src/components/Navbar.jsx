import React from "react";
import { Link } from "react-router-dom";
import logoNavbar from "../assets/logo-navbar.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoNavbar} alt="Logo" className="logo-img" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
