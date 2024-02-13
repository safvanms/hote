import React from "react";
import "./home.css";
import TeaCards from "../TeaCards/TeaCards";
import NoSugar from "../SugarSec/NoSugar";
import Hero from "../Hero/Hero";
import AboutTag from "../AboutTag/AboutTag";
import Blog from "../HomeBlog/HomeBlog";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <div className="home GenFlex">
        <div className="home_heads GenFlex">
          <h1>Take a Break , </h1>
          <h1>Order a cup !</h1>
        </div>
      </div> */}
      <AboutTag/>
      <TeaCards />
      <Blog/>
      <NoSugar />
    </>
  );
};

export default Home;
