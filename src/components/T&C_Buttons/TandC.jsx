import React from "react";
import "./t&c.css";
import { useNavigate } from "react-router-dom";

const TandC = () => {
  const navigate = useNavigate();

  const goToTandC = () => {
    navigate("/terms-and-condition");
  };

  const goToPrivacyPolicy = () => {
    navigate("/privacy-policy");
  };

  return (
    <div>
      <div className="t_and_c GenFlex">
        <p onClick={goToTandC}>Terms and Condition</p>
        <p onClick={goToPrivacyPolicy}>Privacy Policy</p>
      </div>
    </div>
  );
};

export default TandC;
