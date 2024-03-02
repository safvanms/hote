import React, { useEffect, useState } from "react";
import "./menu.css";
import { useNavigate } from "react-router-dom";
import useContentful from "../useContentful";
import BevImg from "../../assets/images/menu_img.jpg";
import Burger from "../../assets/images/burger_bg.png";
import Fries from "../../assets/images/fries.png";
import { MenuItems } from "./MenuItems";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [snacks, setSnacks] = useState([]);

  const navigate = useNavigate();

  const { getALlMenus, getAllBurgersAndSandwiches, getAllSnacks } =
    useContentful();

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedMenus = await getALlMenus();
      const fetchedBurgers = await getAllBurgersAndSandwiches();
      const fetchedSnacks = await getAllSnacks();
      setMenus(fetchedMenus);
      setBurgers(fetchedBurgers);
      setSnacks(fetchedSnacks);
    };
    fetchBlogs();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const returnHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div div className="menu_page">
      <div className="menu_container ">
        <div className="blur in-blur1 menu_blur1"></div>
        <h1>menú de hoté</h1>

        {menus.length > 0 ? (
          <MenuItems title="hoté beverages" image={BevImg} items={menus} />
        ) : (
          <div className="menu_waiting GenFlex" style={{ height: "300px" }}>
            <p>Please wait... </p>
            <p> Your menu is on the way !</p>
          </div>
        )}

        {burgers.length > 0 && (
          <React.Fragment>
            <MenuItems
              title="hoté Burgers & Sandwiches"
              image={Burger}
              items={burgers}
              reverse={true}
            />
          </React.Fragment>
        )}

        {snacks.length > 0 && (
          <MenuItems title="hoté Snacks" image={Fries} items={snacks} />
        )}
      </div>

      <div className="home_return GenFlex" onClick={returnHome}>
        Go Home
      </div>
      
    </div>
  );
};

export default Menu;
