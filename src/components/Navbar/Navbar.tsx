import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar-place">
      <div className="navbar">
        <h1 className="logo">
          SIXTEEN <span>CLOTHING</span>
        </h1>
        <ul className="links">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/products">
            <li>Our Products</li>
          </NavLink>
          <NavLink to="/about">
            <li>About Us</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
