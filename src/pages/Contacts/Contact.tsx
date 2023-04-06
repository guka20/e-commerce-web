import React, { useEffect } from "react";
import { Header } from "../../components";
import { controllScreen } from "../../config/controllScreen";
import { BodyLayout } from "../../Layouts";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import "./contact.css";
export const Contact = () => {
  useEffect(() => {
    controllScreen();
  }, []);
  return (
    <div>
      <div className="loading-board"></div>
      <Header imageUrl="contact-heading.jpg">
        <div className="headers-container">
          <h2 className="sub-title">CONTACT US</h2>
          <h1 className="title">LET’S GET IN TOUCH</h1>
        </div>
      </Header>
      <BodyLayout>
        <section className="contact-location">
          <header className="body-header">
            <h1>Our Location on map</h1>
          </header>
          <div className="location-place">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113292.0132567792!2d44.72336201875393!3d41.740173274328946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi!5e0!3m2!1sen!2sge!4v1680812261181!5m2!1sen!2sge"
              width="730"
              height="337"
              loading="lazy"
            ></iframe>
            <div className="texture">
              <h4 className="title">About our office</h4>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                voluptate nihil eumester consectetur similiqu consectetur.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisic elit. Et,
                consequuntur, modi mollitia corporis ipsa voluptate corrupti.
              </p>
              <p className="social-links">
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com/">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.behance.net/">
                  <FaBehance />
                </a>
              </p>
            </div>
          </div>
        </section>
      </BodyLayout>
    </div>
  );
};
