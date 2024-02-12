import React from "react";
import "./aboutTag.css";
import LearnMore from "../LearnMore/LearnMore";
import { useNavigate } from "react-router-dom";

const AboutTag = () => {
  const navigate = useNavigate();

  const handleGoAbout = () => {
    navigate("/about");
  };
  
  return (
    <div className="about_tag GenFlex" onClick={handleGoAbout}>
      <p>Aware the Quality | Keep Visiting ! </p>
      <LearnMore />
    </div>
  );
};

export default AboutTag;
