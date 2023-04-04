import React, { useEffect, useState } from "react";
import {
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  ProductCard,
  PrimaryButton,
} from "../../components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BodyLayout, ProductsList } from "../../Layouts";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { controllScreen } from "../../config/controllScreen";
import axios from "../../config/api";
import "swiper/css";
import "swiper/css/pagination";
import "./home.css";
import { ProductsDataProt } from "../../props/props";

export const Home = () => {
  const [productData, setProductData] = useState<ProductsDataProt>();
  const getProductsData = async (url: string) => {
    const resp = await axios.get(url);
    setProductData(resp.data.products);
  };
  useEffect(() => {
    try {
      getProductsData("products?limit=6");
    } catch (error) {}
    controllScreen();
  }, []);

  return (
    <>
      {/* ===================== HEADER PLACE ====================== */}
      <div className="loading-board"></div>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        freeMode
        loop
      >
        {/* FIRST SLIDE */}
        <SwiperSlide>
          <HeaderOne>
            <div className="headers-container">
              <h2 className="sub-title">best offer</h2>
              <h1 className="title">new arrivals on sale</h1>
            </div>
          </HeaderOne>
        </SwiperSlide>

        {/* SECOND SLIDE */}
        <SwiperSlide>
          <HeaderTwo>
            <div className="headers-container">
              <h2 className="sub-title">flash Deals</h2>
              <h1 className="title">get your best products</h1>
            </div>
          </HeaderTwo>
        </SwiperSlide>

        {/* THIRT SLIDE */}
        <SwiperSlide>
          <HeaderThree>
            <div className="headers-container">
              <h2 className="sub-title">last minute</h2>
              <h1 className="title">grab last minute deals</h1>
            </div>
          </HeaderThree>
        </SwiperSlide>
      </Swiper>
      <br />
      {/* =============================== BODY PLACE ===============================*/}
      <BodyLayout>
        <section className="latest-products">
          <header className="body-heading">
            <h1>Latest Products</h1>

            <span className="products-link">
              <NavLink to="/products">
                VIEW ALL PRODUCTS
                <MdKeyboardArrowRight style={{ verticalAlign: "middle" }} />
              </NavLink>
            </span>
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
        <section className="about-sexteen-clothing">
          <header className="body-heading">
            <h1>About Sexteen Clothing</h1>
          </header>
          <div className="description">
            <div className="texture">
              <h4>Looking for the best products?</h4>
              <p>
                <Link to="/">This template</Link> is free to use for your
                business websites. However, you have no permission to
                redistribute the downloadable ZIP file on any template
                collection website. <Link to="/contact">Contact us</Link> for
                more info.
              </p>
              <ol className="description-list">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur an adipisicing elit</li>
                <li>It aquecorporis nulla aspernatur</li>
                <li>Corporis, omnis doloremque</li>
                <li>Non cum id reprehenderit</li>
              </ol>
            </div>
            <img
              src={require("../../images/feature-image.jpg")}
              alt="feature-img"
              className="feature-img"
            />
          </div>
          <PrimaryButton>Read More</PrimaryButton>
        </section>
        <section className="creative-and-unique">
          <div className="texture">
            <h4>
              Creative & Unique <b>Sixteen</b> Products
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              corporis amet elite author nulla.
            </p>
          </div>
          <PrimaryButton>Purchase Now</PrimaryButton>
        </section>
      </BodyLayout>
    </>
  );
};
