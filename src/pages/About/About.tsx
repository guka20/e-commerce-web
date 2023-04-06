import React, { useEffect } from "react";
import { Header } from "../../components";
import { controllScreen } from "../../config/controllScreen";
import { BodyLayout, ProductsList } from "../../Layouts";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import "./about.css";
import { MemberCard } from "./components/MemberCard";
import { ServiceCard } from "./components/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
export const About = () => {
  useEffect(() => {
    controllScreen();
  }, []);
  return (
    <div className="about-page">
      <div className="loading-board"></div>
      <Header imageUrl="about-heading.jpg">
        <div className="headers-container">
          <h2 className="sub-title">About US</h2>
          <h1 className="title">OUR COMPANY</h1>
        </div>
      </Header>
      <BodyLayout>
        <section className="about-us">
          <header className="body-heading">
            <h1>Our Background</h1>
          </header>
          <div className="info-about-us">
            <img
              src={require("../../images/feature-image.jpg")}
              alt="feature-img"
              className="feature-img"
            />
            <div className="texture">
              <h4 className="title">Who we are & What we do?</h4>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                voluptate nihil eum consectetur similique? Consectetur, quod,
                incidunt, harum nisi dolores delectus reprehenderit voluptatem
                perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                consequuntur, modi mollitia corporis ipsa voluptate corrupti eum
                ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti
                necessitatibus perspiciatis quis.
              </p>
              <p className="social-links">
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com/">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.behance.net/">
                  <FaBehance />
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="team-members">
          <header className="body-heading">
            <h1>Our Team Members</h1>
          </header>

          <ProductsList>
            <MemberCard
              image="team_01.jpg"
              name="Johnny William"
              proffesion="Co-Founder"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
            />
            <MemberCard
              image="team_02.jpg"
              name="Karry Pitcher"
              proffesion="Product Expert"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
            />
            <MemberCard
              image="team_03.jpg"
              name="Michael Soft"
              proffesion="Chief Marketing"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
            />
            <MemberCard
              image="team_04.jpg"
              name="Mary Cool"
              proffesion="Product Specialist"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
            />
            <MemberCard
              image="team_05.jpg"
              name="George Walker"
              proffesion="Product Photographer"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
            />
            <MemberCard
              image="team_06.jpg"
              name="Kate Town"
              proffesion="General Manager"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
            />
          </ProductsList>
        </section>
        <section className="services-section">
          <ProductsList>
            <ServiceCard
              title="Product Management"
              description="Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."
              buttonText="Read More"
            />
            <ServiceCard
              title="Customer Relations"
              description="Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."
              buttonText="Details"
            />
            <ServiceCard
              title="Global Collection"
              description="Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."
              buttonText="Read More"
            />
          </ProductsList>
        </section>
        <section className="partners-section">
          <header className="body-heading">
            <h1>Happy Partners</h1>
          </header>
          <Swiper slidesPerView={5} loop={true} spaceBetween={20}>
            <SwiperSlide>
              <img
                src={require("../../images/client-01.png")}
                alt="partner"
                width="198px"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/client-01.png")}
                alt="partner"
                width="198px"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/client-01.png")}
                alt="partner"
                width="198px"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/client-01.png")}
                alt="partner"
                width="198px"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/client-01.png")}
                alt="partner"
                width="198px"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/client-01.png")}
                alt="partner"
                width="198px"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/client-01.png")}
                alt="partner"
                width="198px"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/client-01.png")}
                alt="partner"
                width="198px"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/client-01.png")}
                alt="partner"
                width="198px"
              />
            </SwiperSlide>
          </Swiper>
        </section>
      </BodyLayout>
    </div>
  );
};
