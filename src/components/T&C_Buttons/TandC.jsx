import React from "react";
import "./t&c.css";
import { useNavigate } from "react-router-dom";

const TandC = () => {
  const navigate = useNavigate();

  const goToThePage = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div>
      <div className="t_and_c GenFlex">
        <p onClick={() => goToThePage("terms-and-condition")}>Terms and Conditions</p>
        <p onClick={() => goToThePage("privacy-policy")}>Privacy</p>
        <p onClick={() => goToThePage("contact")}>Contact </p>
      </div>
    </div>
  );
};

export default TandC;
