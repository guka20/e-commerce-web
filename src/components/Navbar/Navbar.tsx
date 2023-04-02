import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
const darkStyle = {
  color: "white !important",
  backgroundColor: "#232323",
};
const lightStyle = {
  color: "#232323 !important",
  backgroundColor: "white",
};
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY !== 0);
    });
  }, []);
  return (
    <nav className="navbar-place" style={scrolled ? lightStyle : darkStyle}>
      <div className="navbar">
        <Link to="/">
          <h1
            className="logo"
            style={{ color: scrolled ? "#232323" : "white" }}
          >
            SIXTEEN <span>CLOTHING</span>
          </h1>
        </Link>
        <ul className="links">
          <NavLink to="/">
            <li style={{ color: scrolled ? "#232323" : "white" }}>Home</li>
          </NavLink>
          <NavLink to="/products">
            <li style={{ color: scrolled ? "#232323" : "white" }}>
              Our Products
            </li>
          </NavLink>
          <NavLink to="/about">
            <li style={{ color: scrolled ? "#232323" : "white" }}>About Us</li>
          </NavLink>
          <NavLink to="/contact">
            <li style={{ color: scrolled ? "#232323" : "white" }}>
              Contact Us
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
