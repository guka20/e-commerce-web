import React, { useEffect, useState } from "react";
import { Header, PrimaryButton } from "../../components";
import { controllScreen } from "../../config/controllScreen";
import { BodyLayout } from "../../Layouts";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "./contact.css";
import { Input } from "./components";
type StateProps = {
  fullname: string;
  email: string;
  subject: string;
  message: string;
};
export const Contact = () => {
  const [contact, setContact] = useState<StateProps>({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isAccordingOpen, setIsAccordingOpen] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
  });
  useEffect(() => {
    controllScreen();
  }, []);

  return (
    <div>
      <div className="loading-board"></div>
      <Header imageUrl="contact-heading.jpg">
        <div className="headers-container">
          <h2 className="sub-title">CONTACT US</h2>
          <h1 className="title">LET’S GET IN TOUCH</h1>
        </div>
      </Header>
      <BodyLayout>
        <section className="contact-location">
          <header className="body-header">
            <h1>Our Location on map</h1>
          </header>
          <div className="location-place">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11914.57838540081!2d44.742293208377454!3d41.70660747481656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi!5e0!3m2!1sen!2sge!4v1680812672864!5m2!1sen!2sge"
              width="730"
              height="337"
              loading="lazy"
              style={{ border: "0" }}
            ></iframe>
            <div className="texture">
              <h4 className="title">About our office</h4>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                voluptate nihil eumester consectetur similiqu consectetur.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisic elit. Et,
                consequuntur, modi mollitia corporis ipsa voluptate corrupti.
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
        <section className="contact-us">
          <header className="body-header">
            <h1>Our Location on map</h1>
          </header>
          <div className="inputs-textures">
            <div className="inputs">
              <form>
                <Input
                  type="text"
                  state={contact}
                  placeholder="Full Name"
                  setContact={setContact}
                  name="fullname"
                />
                <Input
                  type="email"
                  state={contact}
                  placeholder="E-Mail Address"
                  setContact={setContact}
                  name="email"
                />
                <Input
                  type="text"
                  state={contact}
                  placeholder="Subject"
                  setContact={setContact}
                  name="subject"
                />
                <textarea
                  name="message"
                  id="message"
                  value={contact.message}
                  onChange={(e) =>
                    setContact({ ...contact, message: e.target.value })
                  }
                ></textarea>
                <PrimaryButton type="submit">Send Message</PrimaryButton>
              </form>
            </div>
            <div className="textures">
              <ul>
                <li>
                  <h3
                    className={
                      isAccordingOpen.one ? "open-header" : "close-header"
                    }
                    onClick={() =>
                      setIsAccordingOpen({
                        one: true,
                        two: false,
                        three: false,
                        four: false,
                      })
                    }
                  >
                    Accordion Title One
                  </h3>
                  <div className={isAccordingOpen.one ? "open" : "close"}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                      voluptate nihil eumester consectetur similiqu consectetur.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Et,
                      consequuntur, modi mollitia corporis ipsa voluptate
                      corrupti elite.
                    </p>
                  </div>
                </li>
                <li>
                  <h3
                    className={
                      isAccordingOpen.two ? "open-header" : "close-header"
                    }
                    onClick={() =>
                      setIsAccordingOpen({
                        one: false,
                        two: true,
                        three: false,
                        four: false,
                      })
                    }
                  >
                    Second Title Here
                  </h3>
                  <div className={isAccordingOpen.two ? "open" : "close"}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                      voluptate nihil eumester consectetur similiqu consectetur.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Et,
                      consequuntur, modi mollitia corporis ipsa voluptate
                      corrupti elite.
                    </p>
                  </div>
                </li>
                <li>
                  <h3
                    className={
                      isAccordingOpen.three ? "open-header" : "close-header"
                    }
                    onClick={() =>
                      setIsAccordingOpen({
                        one: false,
                        two: false,
                        three: true,
                        four: false,
                      })
                    }
                  >
                    According Title Three
                  </h3>
                  <div className={isAccordingOpen.three ? "open" : "close"}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                      voluptate nihil eumester consectetur similiqu consectetur.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Et,
                      consequuntur, modi mollitia corporis ipsa voluptate
                      corrupti elite.
                    </p>
                  </div>
                </li>
                <li>
                  <h3
                    className={
                      isAccordingOpen.four ? "open-header" : "close-header"
                    }
                    onClick={() =>
                      setIsAccordingOpen({
                        one: false,
                        two: false,
                        three: false,
                        four: true,
                      })
                    }
                  >
                    Fourth According Title
                  </h3>
                  <div className={isAccordingOpen.four ? "open" : "close"}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                      voluptate nihil eumester consectetur similiqu consectetur.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Et,
                      consequuntur, modi mollitia corporis ipsa voluptate
                      corrupti elite.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="partners-section">
          <header className="body-heading">
            <h1>Our Happy Customers</h1>
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
