import React, { useEffect, useState } from "react";
import "./menu.css";
import { useNavigate } from "react-router-dom";
import useContentful from "../useContentful";
import BevImg from "../../assets/images/menu_img.jpg";
import Burger from "../../assets/images/burger_bg.png";
import Fries from "../../assets/images/fries.png";
import Choco from "../../assets/images/choco.png";
import { MenuItems } from "./MenuItems";

const Menu = () => {
  const [fetched, setFetched] = useState(false);
  const [menus, setMenus] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [shakes, setShakes] = useState([]);

  const navigate = useNavigate();

  const { getEntriesByContentType } = useContentful();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMenus = await getEntriesByContentType("hotDeMenu");
        const fetchedBurgers = await getEntriesByContentType(
          "burgersAndSandwichesMenu"
        );
        const fetchedSnacks = await getEntriesByContentType("hotSnacks");
        const fetchedShakes = await getEntriesByContentType(
          "hotRefreshingMilkshakes"
        );

        setMenus(fetchedMenus);
        setBurgers(fetchedBurgers);
        setSnacks(fetchedSnacks);
        setShakes(fetchedShakes);
        setFetched(true);  // Mark fetching as completed
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    if (!fetched) fetchData();
  },[fetched,getEntriesByContentType]);

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

        {shakes.length > 0 && (
          <React.Fragment>
            <MenuItems
              title="hoté refreshing shakes"
              image={Choco}
              items={shakes}
              reverse={true}
            />
          </React.Fragment>
        )}
      </div>

      <div className="home_return GenFlex" onClick={returnHome}>
        Click to explore more .
      </div>
    </div>
  );
};

export default Menu;
