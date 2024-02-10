import React from 'react'
import './sticker.css'
import keepCityClean from "../../assets/images/keepcityclean.png";
import GreenDot from "../../assets/images/Green-Dot.png";
import water from "../../assets/images/water.png";
import Earth from "../../assets/images/earth.png";
import Blood from "../../assets/images/blood.png";

const Sticker = () => {
  return (
    <div>
      <div className="sticker_container GenFlex">
        <img src={GreenDot} alt="edible" className="sticker_icon" />
        <img src={keepCityClean} alt="keep_city_clean" className="sticker_icon" />
        <img src={water} alt="save_water" className="sticker_icon" />
        <img src={Earth} alt="save_earth" className="sticker_icon" />
        <img src={Blood} alt="donate_blood" className="sticker_icon blood" />
      </div>
    </div>
  )
}

export default Sticker
