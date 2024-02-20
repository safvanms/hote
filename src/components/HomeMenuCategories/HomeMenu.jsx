import React from "react";
import "./homeMenu.css";

import { categories } from "../../constants";

const HomeMenu = () => {
  return (
    <div className="h_menu GenFlex">
      <div className="blur h_blur "></div>
      {categories.map(({ item, image, id }) => (
        <div className="h_menu_content GenFlex" key={id}>
          <div className="h_menu_images">
            <img src={image} alt="item" />
          </div>
          <div className="h_menu_category">{item}</div>
        </div>
      ))}
      <div className="blur h_blur2 "></div>

    </div>
  );
};

export default HomeMenu;
