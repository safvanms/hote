import React from "react";
import "./t&c.css";
import { useNavigate } from "react-router-dom";

const TandC = () => {
  const navigate = useNavigate();

  // function for routing dynamically for different pages
  const goToThePage = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div>
      <div className="t_and_c GenFlex">
        <p onClick={() => goToThePage("terms-and-condition")}>
          Terms & Conditions
        </p>
        <p onClick={() => goToThePage("contact")}>Contact </p>
        <p onClick={() => goToThePage("privacy-policy")}>Privacy Policy</p>
      </div>
    </div>
  );
};

export default TandC;
