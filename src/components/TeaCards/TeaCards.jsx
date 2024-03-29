import React from "react";
import "./teaCard.css";
import { products } from "../../constants";
import { useNavigate } from "react-router-dom";
import Leaves from "../../assets/images/leaves.svg";
import Button from '../Button/Button'

const TeaCards = () => {
  const navigate = useNavigate();

// navigate to the Menu 
  const handleGoToMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="cards_container">
      <img src={Leaves} alt="leaves" className="leaves" />
      <div className="card_heading GenFlex">
        <h2>Featured Beverages</h2>
        <p className="view_menu_btn" onClick={handleGoToMenu}>View Menu</p>
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
      <div className="sm_view_menu_btn" onClick={handleGoToMenu}>
        <Button content={"View Menu"} bg={"#362819"}/>
      </div>
    </div>
  );
};

export default TeaCards;
