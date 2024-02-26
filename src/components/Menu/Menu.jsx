import React, { useEffect, useState } from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import useContentful from "../useContentful";
import BevImg from "../../assets/images/hero.png";
import Burger from "../../assets/images/burger_bg.png";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const { getALlMenus } = useContentful();
  const { getAllBurgersAndSandwiches } = useContentful();

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedMenus = await getALlMenus();
      const fetchedBurgers = await getAllBurgersAndSandwiches();
      setMenus(fetchedMenus);
      setBurgers(fetchedBurgers);
    };
    fetchBlogs();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div div className="menu_page">
      <div className="menu_container ">
        <div className="blur in-blur1 menu_blur1"></div>
        <h1>menú de hoté</h1>

        {menus.length > 0 ? (
          <div className="menu GenFlex">
            <div className="menu_image GenFlex">
              <h2>hoté beverages</h2>
              <img src={BevImg} alt="beverages" />
            </div>
            <div className="menu_right">
              <ul className="menu_list">
                {menus?.map(({ id, menu, price, description }) => (
                  <>
                    <li key={id}>
                      <div>{menu}</div> <div>₹{price}</div>
                    </li>
                    <li className="menu_description">
                      {description ? "- " + description : ""}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="GenFlex" style={{ height: "300px" }}>
            <div>Please wait... Your menu is on the way !</div>
          </div>
        )}

        {burgers.length > 0 && (
          <div className="menu GenFlex">
            <div className="menu_image sm_bg GenFlex">
              <h2>hoté Burgers & Sandwiches</h2>
              <img src={Burger} alt="beverages" />
            </div>
            <div className="menu_right">
              <ul className="menu_list">
                {burgers?.map(({ id, menu, price, description }) => (
                  <>
                    <li key={id}>
                      <div>{menu}</div> <div>₹{price}</div>
                    </li>
                    <li className="menu_description">
                      {description ? "- " + description : ""}
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="menu_image lg_bg GenFlex">
              <h2>hoté Burgers & Sandwiches</h2>
              <img src={Burger} alt="beverages" />
            </div>
          </div>
        )}

      </div>
      <div className="home_return GenFlex">
        <Link to="/" style={{ textDecoration: "none" }}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Menu;
