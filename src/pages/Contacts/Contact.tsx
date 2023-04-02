import React, { useEffect } from "react";
import { Header } from "../../components";
import { controllScreen } from "../../config/controllScreen";
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
    </div>
  );
};
