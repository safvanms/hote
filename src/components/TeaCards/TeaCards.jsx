import React from "react";
import "./teaCard.css";
import { products } from "../../constants";

const TeaCards = () => {
  return (
    <div className="cards_container">
      <div className="card_heading">
        <h2>We Serves </h2>
      </div>
      <div className="cards GenFlex">
        {products?.map(({ id, item, image, desc }) => (
          <div className="card" key={id}>
            <div className="hover_overlay">hoté intl </div>
            <img src={image} alt="item" />
            <div className="item">
              <h3>{item}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeaCards;
