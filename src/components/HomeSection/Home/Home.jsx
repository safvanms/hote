import React from "react";
import "./home.css";
import TeaCards from "../../TeaCards/TeaCards";
import NoSugar from "../../SugarSec/NoSugar";
import Hero from "../../Hero/Hero";
import AboutTag from "../../AboutTag/AboutTag";
import HomeReview from "../HomeReview/HomeReview";
import HomeBlog from "../../BlogSection/HomeBlog/HomeBlog";
import HomeMenu from "../HomeMenuCategories/HomeMenu";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutTag />
      <TeaCards />
      {/* <div className="home GenFlex">
        <div className="home_heads GenFlex">
          <h1>Take a Break , </h1>
          <h1>Order a cup !</h1>
        </div>
      </div> */}
      <HomeMenu/>
      <HomeReview />
      <NoSugar />
      <HomeBlog />
    </>
  );
};

export default Home;
