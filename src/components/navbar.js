import { useLocation } from "react-router-dom";
import Logo from "../asset/Logo JFest Large.png";
import BtnDarkLogin from "../asset/BtnDarkLogin.png";
import btnWhite from "../asset/btnWhiteBG.png";
import Spiders from "../asset/Spiders.png";

const NavBar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  return (
    <nav>
      <img className="logo" src={Logo} alt="Backdrop" />
      <ul>
        <li>
          <a href="navbar.js">BERANDA</a>
        </li>
        <li>
          <a href="navbar.js">TENTANG</a>
        </li>
        <li>
          <a href="navbar.js">KEGIATAN</a>
        </li>
      </ul>
      <div>
        {isHomePage ? (
          <a href="navbar.js">
            <img className="btn-login" src={BtnDarkLogin} alt="BtnLogin" />
          </a>
        ) : (
          <a className="login-link" href="navbar.js">
            <img className="btn-login" src={btnWhite} alt="BtnLogin" />
            <p>Daftar / Masuk</p>
          </a>
        )}
        {isHomePage && <img className="spiders" src={Spiders} alt="Spiders" />}
      </div>
    </nav>
  );
};

export default NavBar;
