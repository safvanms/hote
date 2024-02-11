import React from "react";
import "./menu.css";
import { menus } from "../../../src/constants";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu_container ">
        <div className="blur in-blur1 menu_blur1"></div>
        <h1>menú de hoté</h1>

        <div className="menu GenFlex">
          <div className="menu_left">
            {menus?.map(({ no, category, items }) => (
              <div key={no} className="menu_categories">
                {category === "Tea" && items.length > 0 && (
                  <h2 className="list_head">{category}</h2>
                )}
                <ul className="menu_list">
                  {category === "Tea" &&
                    items?.map(({ id, name, price }) => (
                      <li key={id}>
                        <div>{name}</div> <div>₹{price}</div>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="menu_right">
            {menus?.map(({ no, category, items }) => (
              <div key={no} className="menu_categories">
                {category === "Coffee" && items.length > 0 && (
                  <h2 className="list_head">{category}</h2>
                )}
                <ul className="menu_list">
                  {category === "Coffee" &&
                    items?.map(({ id, name, price }) => (
                      <li key={id}>
                        <div>{name}</div> <div>₹{price}</div>
                      </li>
                    ))}
                </ul>
              </div>
            ))}

            {menus?.map(({ no, category, items }) => (
              <div key={no} className="menu_categories">
                {category === "Other" && items.length > 0 && (
                  <h2 className="list_head">{category}</h2>
                )}
                <ul className="menu_list">
                  {category === "Other" &&
                    items?.map(({ id, name, price }) => (
                      <li key={id}>
                        <div>{name}</div> <div>₹{price}</div>
                      </li>
                    ))}
                </ul>
              </div>
            ))}

            {menus?.map(({ no, category, items }) => (
              <div key={no} className="menu_categories">
                {category === "Snacks" && items.length > 0 && (
                  <h2 className="list_head">{category}</h2>
                )}
                <ul className="menu_list">
                  {category === "Snacks" &&
                    items?.map(({ id, name, price }) => (
                      <li key={id}>
                        <div>{name}</div> <div>{price}</div>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="blur in-blur2 menu_blur2"></div>
      </div>
      <div className="home_return GenFlex">
        <Link to="/" style={{ textDecoration: "none" }}>
          Go Home
        </Link>
      </div>
    </>
  );
};

export default Menu;
