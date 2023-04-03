import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./product.css";
export const ProductCard = () => {
  let component = Array(5).fill(0);
  return (
    <div className="product-card">
      <img src={require("../../images/product_01.jpg")} alt="products" />
      <div className="container">
        <header className="header">
          <span className="title">Title goes here</span>{" "}
          <span className="price">$25.75</span>
        </header>
        <main className="description">
          Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
          aspernatur.
        </main>
        <footer className="describe">
          <span>
            {component.map(() => (
              <AiFillStar style={{ color: "rgb(243, 63, 63" }} />
            ))}
          </span>
          <span style={{ color: "rgb(243, 63, 63" }}>Reviews(24)</span>
        </footer>
      </div>
    </div>
  );
};
