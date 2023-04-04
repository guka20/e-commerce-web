import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ProductCardProps } from "../../props/props";
import "./product.css";

export const ProductCard = ({
  image,
  title,
  price,
  description,
  rating,
  review,
}: ProductCardProps) => {
  let component = Array(rating).fill(0);
  return (
    <div className="product-card">
      <img src={image} alt="products" />
      <div className="container">
        <header className="header">
          <span className="title">{title}</span>
          <span className="price">${price}</span>
        </header>
        <main className="description">{description}</main>
        <footer className="describe">
          <span>
            {component.map((l, index: number) => (
              <AiFillStar key={index} style={{ color: "rgb(243, 63, 63" }} />
            ))}
          </span>
          <span style={{ color: "rgb(243, 63, 63" }}>Reviews({review})</span>
        </footer>
      </div>
    </div>
  );
};
