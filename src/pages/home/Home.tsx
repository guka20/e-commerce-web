import React, { useEffect } from "react";
import {
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  ProductCard,
} from "../../components";
import { MdKeyboardArrowRight } from "react-icons/md";

import { BodyLayout } from "../../Layouts";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { controllScreen } from "../../config/controllScreen";
import "swiper/css";
import "swiper/css/pagination";
import "./home.css";

export const Home = () => {
  useEffect(() => {
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
              <NavLink to="/products" style={{ textAlign: "center" }}>
                VIEW ALL PRODUCTS
                <MdKeyboardArrowRight fontSize="2rem" />
              </NavLink>
            </span>
          </header>
          <main className="products-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </main>
        </section>
      </BodyLayout>
    </>
  );
};
