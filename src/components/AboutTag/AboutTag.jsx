import React from "react";
import "./aboutTag.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const AboutTag = () => {
  const navigate = useNavigate();
  // function to rout to the about page
  const handleGoAbout = () => {
    navigate("/about");
  };

  return (
    <div className="about_tag GenFlex" onClick={handleGoAbout}>
      <p>Aware the Quality | Keep Visiting ! </p>
      <Button content={"know more"} bg={"#362819"} />
    </div>
  );
};

export default AboutTag;
