import React from "react";
import { Header } from "../../components/";
export const Products = () => {
  return (
    <div>
      <div className="loading-board"></div>
      <Header imageUrl="products-heading.jpg">
        <div className="headers-container">
          <h2 className="sub-title">NEW ARRIVALS</h2>
          <h1 className="title">SIXTEEN PRODUCTS</h1>
        </div>
      </Header>
    </div>
  );
};
