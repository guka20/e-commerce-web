import React from "react";
import { HeaderOne, HeaderTwo, HeaderThree } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const Home = () => {
  return (
    <>
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
      Home
    </>
  );
};
