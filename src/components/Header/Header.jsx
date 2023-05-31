import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Hamburguer from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div>
          <img
            src={Hamburguer}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
            onClick={() => setMenuOpened(true)}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link onClick={() => setMenuOpened(false)} to="home" smooth={true}>
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans-section"
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
