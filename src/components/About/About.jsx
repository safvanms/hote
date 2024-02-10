import React from "react";
import "./about.css";

import main from "../../assets/images/hoté_intl_logo.png";
import sub from "../../assets/images/hoté_intl.png";
import keepCityClean from "../../assets/images/keepcityclean.png";

const About = () => {
  return (
    <div className="about GenFlex">
      <div className="about_sec GenFlex">
        <p>
          Welcome to hoté international <strong>hoté intl</strong> , where
          tradition meets innovation. Founded in 2024, we are dedicated to
          providing a unique experience for tea and coffee enthusiasts. Our café
          offers a diverse selection of beverages and traditional tastes, with a
          focus on promoting a healthy lifestyle by saying no to sugar and soft
          drinks. At <strong>hoté intl</strong>, we are committed to making a
          positive impact on our community and environment by advocating for
          cleanliness and sustainability. Join us on a journey of taste,
          tradition, and togetherness, as we invite you to unwind and connect
          with friends over a cup of our signature tea or freshly brewed coffee.
        </p>
      </div>
      <div className="about_logos GenFlex">
        <img src={main} alt="logo" />
        <img src={sub} alt="logo" />
      </div>

      <div className="about_footer_banner GenFlex">
        <img src={keepCityClean} alt="keep_city_clean" className="keep_city_clean" />
      </div>
    </div>
  );
};

export default About;
