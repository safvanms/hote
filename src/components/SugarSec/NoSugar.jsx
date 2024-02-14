import React from "react";
import "./noSuger.css";
import sugar from "../../assets/images/sugar.png";
import softDrinks from "../../assets/images/softDrinks.png";

const NoSugar = () => {
  return (
    <>
      <div className="no_sugar_container GenFlex">
        <div className="no_sugar_image GenFlex">
          <img src={softDrinks} alt="pic" />
        </div>
        <div className="no_sugar_quote GenFlex">
          <div className="no_sugar_texts GenFlex">
            <h1>We Never Promote</h1>
            <h1>Soft Drinks </h1>
          </div>
        </div>
      </div>

      <div className="no_sugar_container GenFlex sec2">
        <div className="no_sugar_quote GenFlex">
          <div className="no_sugar_texts GenFlex">
            <h1>We Never Suggests</h1>
            <h1>Sugar</h1>
          </div>
        </div>
        <div className="no_sugar_image GenFlex">
          <img src={sugar} alt="pic" />
        </div>
      </div>
    </>
  );
};

export default NoSugar;
