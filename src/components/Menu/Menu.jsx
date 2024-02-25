import React, { useEffect, useState } from "react";
import "./menu.css";
import { menus } from "../../../src/constants";
import { Link } from "react-router-dom";
import useContentful from "../useContentful";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const { getALlMenus } = useContentful();

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedMenus = await getALlMenus();
      setMenus(fetchedMenus);
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
              {menus.length > 0 && (
                <img src={menus[0].bevImg} alt="beverages" />
              )}
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
          <div className="GenFlex" style={{height:"50vh"}}>
            <div>Please wait... Your menu is on the way !</div>
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
