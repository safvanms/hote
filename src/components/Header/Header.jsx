import React, { useState } from "react";
import "./header.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { PiHamburgerDuotone } from "react-icons/pi";
import { GiKnifeFork } from "react-icons/gi";
import LOGO from "../../assets/images/hoté_intl_logo.png";
import sub_logo from "../../assets/images/hoté_intl.png";
import { headers } from "../../constants.js";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // for toggling the clicked state
  const handleClick = () => {
    setClicked(!clicked);
  };

  const year = new Date().getFullYear();
  //internal styles for the Link from react router dom
  const styles = {
    textDecoration: "none",
    color: "#362819",
  };

  //function to rout to the home page
  const getBackHome = () => {
    if (location.pathname === "/") {
      return;
    }
    navigate("/" ,{ replace: true });
  };

  return (
    <div className="header GenFlex">
      <div className="header_left">
        <div className="GenFlex">
          {!clicked && (
            <img src={LOGO} alt="logo" className="logo" onClick={getBackHome} />
          )}
          <img src={sub_logo} alt="logo" className="lg_logo" />
        </div>
      </div>

      <div className="header_right GenFlex lg_screen_menu">
        <ul className=" GenFlex">
          {headers?.map(({ no, name, link }) => (
            <li key={no}>
              <NavLink to={link} style={styles} activeClassName="active">
                {name}
              </NavLink>
            </li>
          ))}
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
            {headers.map(({ no, name, link }) => (
              <NavLink
                to={link}
                style={styles}
                activeClassName="active"
                onClick={() => setClicked(false)}
                key={no}
              >
                <li>{name}</li>
              </NavLink>
            ))}

            <li className="review_btn" onClick={() => setClicked(false)}>
              <NavLink
                to={"/review"}
                style={{ textDecoration: "none", color: "#fff" }}
                activeClassName="active"
              >
                Write a Review
              </NavLink>
            </li>
          </ul>

          <div className="sm_option_footer">
            © {year} hoté intl , All right reserved.
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
