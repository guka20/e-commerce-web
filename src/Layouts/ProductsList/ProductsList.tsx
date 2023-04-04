import React from "react";
import { ComponentProps } from "../../props/props";
import "./ProductList.css";

export const ProductsList = ({ children }: ComponentProps) => {
  return <main className="products-list">{children}</main>;
};
