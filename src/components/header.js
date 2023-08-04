import React, { useState, useEffect } from "react";
import Backdrop from "../asset/Backdrop.png";
import BackdropMobile from "../asset/BackdropMobile.png";
import Separator from "../asset/Separator.png";
import BtnKegiatan from "../asset/BtnDarkKegiatan.png";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const maxWidth = window.innerWidth;
    if (maxWidth <= 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="header">
      {isMobile ? (
        <img className="backdrop" src={BackdropMobile} alt="Backdrop" />
      ) : (
        <img className="backdrop" src={Backdrop} alt="Backdrop" />
      )}
      <div>
        <h1>
          HYAKKI <br />
          YAGYO
        </h1>
        <img className="separator" src={Separator} alt="Separator" />
        <img className="separator" src={BtnKegiatan} alt="Separator" />
      </div>
    </div>
  );
};

export default Header;
