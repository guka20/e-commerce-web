import React, { useEffect, useState } from "react";
import { Header, ProductCard } from "../../components/";

import "./product.css";
import { controllScreen } from "../../config/controllScreen";
import { BodyLayout, ProductsList } from "../../Layouts";
import { ProductsDataProt } from "../../props/props";
import axios from "../../config/api";
export const Products = () => {
  const [productData, setProductData] = useState<ProductsDataProt>();
  const [skip, setSkip] = useState<Number>(0);
  const getProductsData = async (url: string) => {
    const resp = await axios.get(url);
    setProductData(resp.data.products);
  };
  useEffect(() => {
    getProductsData(`products?limit=6&$skip=${skip}`);
    controllScreen();
  }, []);
  return (
    <div>
      <div className="loading-board"></div>
      <Header imageUrl="products-heading.jpg">
        <div className="headers-container">
          <h2 className="sub-title">NEW ARRIVALS</h2>
          <h1 className="title">SIXTEEN PRODUCTS</h1>
        </div>
      </Header>

      <BodyLayout>
        <section className="products-list-page">
          <header className="body-heading">
            <ul className="products">
              <li className="active">All Products</li>
              <li>Smartphones</li>
              <li>Laptops</li>
              <li>Fragrances</li>
              <li>Skincare</li>
              <li>Groceries</li>
              <li>Home Decoration</li>
            </ul>
          </header>
          <ProductsList>
            {productData &&
              productData.map((l) => (
                <ProductCard
                  key={l.id}
                  image={l.images[0]}
                  title={l.title}
                  price={l.price + ""}
                  description={l.description}
                  rating={Math.floor(l.rating)}
                  review={l.stock + ""}
                />
              ))}
          </ProductsList>
        </section>
      </BodyLayout>
    </div>
  );
};
