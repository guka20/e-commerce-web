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
  const [category, setCategory] = useState("all");
  const getProductsData = async (url: string) => {
    const resp = await axios.get(url);
    console.log(resp.data.products);
    console.log(url);

    setProductData(resp.data.products);
  };
  useEffect(() => {
    setProductData(undefined);
    category === "all"
      ? getProductsData(`products?limit=6&skip=${skip}`)
      : getProductsData(`products/category/${category}?limit=6&skip=${skip}`);
    controllScreen();
  }, [category, skip]);
  const handleCategoryClick = (e: any) => {
    setCategory(e.target.title);
    document
      .querySelectorAll(".category-active")
      .forEach((element) => (element.className = ""));
    e.target.className = "category-active";
  };
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
              <li
                className="category-active"
                title="all"
                onClick={handleCategoryClick}
              >
                All Products
              </li>
              <li title="smartphones" onClick={handleCategoryClick}>
                Smartphones
              </li>
              <li title="laptops" onClick={handleCategoryClick}>
                Laptops
              </li>
              <li title="fragrances" onClick={handleCategoryClick}>
                Fragrances
              </li>
              <li title="skincare" onClick={handleCategoryClick}>
                Skincare
              </li>
              <li title="groceries" onClick={handleCategoryClick}>
                Groceries
              </li>
              <li title="home-decoration" onClick={handleCategoryClick}>
                Home Decoration
              </li>
            </ul>
          </header>
          <ProductsList>
            {productData ? (
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
              ))
            ) : (
              <div className="loading"></div>
            )}
          </ProductsList>
          <button onClick={() => setSkip(0)}>1</button>
          <button onClick={() => setSkip(6)}>2</button>
          <button onClick={() => setSkip(12)}>3</button>
          <button onClick={() => setSkip(18)}>4</button>
        </section>
      </BodyLayout>
    </div>
  );
};
