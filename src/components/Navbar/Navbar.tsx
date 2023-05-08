import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
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
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY !== 0);
    });
  }, []);
  return (
    <nav
      className="navbar-place"
      onBlur={() => setIsNavOpen((prev) => !prev)}
      style={scrolled ? lightStyle : darkStyle}
    >
      <div className="navbar">
        <Link to="/">
          <h1
            className="logo"
            style={{ color: scrolled ? "#232323" : "white" }}
          >
            SIXTEEN <span>CLOTHING</span>
          </h1>
        </Link>
        <ul className={isNavOpen ? "links open" : "links"}>
          <li>
            <NavLink style={{ color: scrolled ? "#232323" : "white" }} to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              style={{ color: scrolled ? "#232323" : "white" }}
              to="/products"
            >
              Our Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              style={{ color: scrolled ? "#232323" : "white" }}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={{ color: scrolled ? "#232323" : "white" }}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div
          className="menu-icon"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
};
