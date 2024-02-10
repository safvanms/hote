import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { PiHamburgerDuotone } from "react-icons/pi";
import { GiKnifeFork } from "react-icons/gi";
import { LuPenTool } from "react-icons/lu";

import LOGO from "../../assets/images/hoté_intl_logo.png";
import sub_logo from "../../assets/images/hoté_intl.png";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const year = new Date().getFullYear();

  const styles = {
    textDecoration: "none",
    color: "#362819",
  };

  return (
    <div className="header GenFlex">
      <div className="header_left">
        <div className="GenFlex">
          {!clicked && <img src={LOGO} alt="logo" className="logo" />}
          <img src={sub_logo} alt="logo" className="lg_logo" />
        </div>
      </div>
      <div className="header_right GenFlex lg_screen_menu">
        <ul className=" GenFlex">
          <li>
            <NavLink to="/" style={styles} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" style={styles} activeClassName="active">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} style={styles} activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} style={styles} activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <button>
          <NavLink
            to={"/review"}
            style={{ textDecoration: "none", color: "#fff" }}
            activeClassName="active"
          >
            Write a Review
          </NavLink>
        </button>
      </div>
      {clicked && (
        <div className="sm_screen_option">
          <ul>
            <NavLink
              to="/"
              style={styles}
              activeClassName="active"
              onClick={() => setClicked(false)}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/menu"
              style={styles}
              activeClassName="active"
              onClick={() => setClicked(false)}
            >
              <li>Menu</li>
            </NavLink>
            <NavLink
              to={"/about"}
              style={styles}
              activeClassName="active"
              onClick={() => setClicked(false)}
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              style={styles}
              activeClassName="active"
              onClick={() => setClicked(false)}
            >
              <li>Contact</li>
            </NavLink>
            <li className="review_btn" onClick={() => setClicked(false)}>
              <NavLink
                to={"/review"}
                style={{ textDecoration: "none", color: "#fff" }}
                activeClassName="active"
              >
                Write a Review {"  "}
                <LuPenTool style={{ marginTop: "5px" }} size={21} />
              </NavLink>
            </li>
          </ul>
          <div className="sm_option_footer">
            @ {year} hoté intl , All right reserved.
          </div>
        </div>
      )}

      <div className="sm_screen_btn" onClick={handleClick}>
        {clicked ? <GiKnifeFork size={22} /> : <PiHamburgerDuotone size={25} />}
      </div>
    </div>
  );
};

export default Header;
