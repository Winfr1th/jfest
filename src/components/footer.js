import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTelegram,
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import textLogo from "../asset/jfest-text-logo.png";
import imgLogo from "../asset/Logo JFest Large.png";
import background from "../asset/footer-bg.png";
import footermbg from "../asset/footer-mobile-bg.png";
import leftWeb from "../asset/footer-left-web.png";
import rightWeb from "../asset/footer-right-web.png";
import "./footer.css";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  const updateisMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    updateisMobile();
    window.addEventListener("resize", updateisMobile);

    return () => {
      window.removeEventListener("resize", updateisMobile);
    };
  }, []);

  const imageSource = isMobile ? footermbg : background;

  return (
    <>
      <div className="container">
        {isMobile ? (
          <img className="background" src={imageSource} alt="Backdrop" />
        ) : (
          <img className="background" src={imageSource} alt="Backdrop" />
        )}
        <div className="web-container">
          <img src={leftWeb} alt=""></img>
          <img src={rightWeb} alt=""></img>
        </div>
        <footer className="footer-container">
          {/* <img className="foot-spider" src={spiders} alt="JFEST 7"></img> */}
          <div className="left-footer">
            <div className="logos">
              <img src={imgLogo} alt="JFEST 7"></img>
              <img src={textLogo} alt="JFEST 7"></img>
            </div>
            <p>
              Festival yang diadakan dan didukung oleh Institut Teknologi dan
              Bisnis STIKOM Bali dan merupakan satu-satunya Festival yang
              mengangkat budaya Jepang di lingkungan Kampus serta rutin dihadiri
              oleh Konsulat Jenderal Jepang di Denpasar.
              <br />
              <br />
              Faktor tersebut menjadikan JFEST sebagai salah satu sarana kami
              mengenalkan budaya Jepang dengan cara yang menyenangkan dan
              dinikmati oleh berbagai kalangan baik di dalam maupun di luar
              lingkungan kampus.
            </p>
          </div>
          <div className="right-footer">
            <div className="contacts">
              <h1>Kontak</h1>
              <ul>
                <li>
                  <a href="footer.js">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <p>TEST (08123456789)</p>
                  </a>
                </li>
                <li>
                  <a href="footer.js">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <p>TEST (08123456789)</p>
                  </a>
                </li>
                <li>
                  <a href="footer.js">
                    <FontAwesomeIcon icon={faTelegram} />
                    <p>TEST (08123456789)</p>
                  </a>
                </li>
                <li>
                  <a href="footer.js">
                    <FontAwesomeIcon icon={faTelegram} />
                    <p>TEST (08123456789)</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="social-media">
              <h1>Media Sosial</h1>
              <ul>
                <li>
                  <a href="footer.js">
                    <FontAwesomeIcon icon={faInstagram} />
                    <p>@JFEST.STIKOM</p>
                  </a>
                </li>
                <li>
                  <a href="footer.js">
                    <FontAwesomeIcon icon={faFacebook} />
                    <p>@JFEST.STIKOM</p>
                  </a>
                </li>
                <li>
                  <a href="footer.js">
                    <FontAwesomeIcon icon={faTiktok} />
                    <p>@JFEST.STIKOM</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
