import React from "react";
import "./hero.css";
import TeaPot from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <>
      <div className="hero_container GenFlex">
        <div className="hero_left">
          <h1>Read...</h1>
          <h1>Sip...</h1>
          <h1>One of the best combinations.</h1>
        </div>
        <div className="blur in-blur1 "></div>
        <div className="hero_right">
          <img src={TeaPot} alt="tea" />
          <div className="drop GenFlex">
          <h1>Love in Every drop...</h1>
        </div>
        </div>
      </div>
      <div className="blur in-blur2 "></div>
    </>
  );
};

export default Hero;
