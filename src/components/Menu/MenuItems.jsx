import React from "react";
import "./menu.css";

export const MenuItems = ({ title, image, items, reverse }) => {
  const containerClass = `menu GenFlex ${reverse ? "reverse-layout" : ""}`;

  return (
    <div className={containerClass}>
      <div className="menu_image GenFlex">
        <h2>{title}</h2>
        <img src={image} alt={title} />
      </div>
      <div className="menu_right">
        <ul className="menu_list">
          {items.map(({ id, menu, price, description }) => (
            <React.Fragment key={id}>
              <li>
                <div>{menu}</div> <div>₹{price}</div>
              </li>
              <li className="menu_description">
                {description ? "- " + description : ""}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};
