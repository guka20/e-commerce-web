import React, { useEffect } from "react";
import { Header } from "../../components";
import { controllScreen } from "../../config/controllScreen";
export const About = () => {
  useEffect(() => {
    controllScreen();
  }, []);
  return (
    <div>
      <div className="loading-board"></div>
      <Header imageUrl="about-heading.jpg">
        <div className="headers-container">
          <h2 className="sub-title">About US</h2>
          <h1 className="title">OUR COMPANY</h1>
        </div>
      </Header>
    </div>
  );
};
