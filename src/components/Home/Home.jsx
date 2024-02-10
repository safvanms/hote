import React from "react";
import "./home.css";
import TeaCards from "../TeaCards/TeaCards";
import NoSugar from "../SugarSec/NoSugar";

const Home = () => {
  return (
    <>
      <div className="home GenFlex">
        <div className="home_heads GenFlex">
          <h1>Take a Break , </h1>
          <h1>Order a cup !</h1>
        </div>
      </div>
      <TeaCards />
        <NoSugar />
    </>
  );
};

export default Home;
