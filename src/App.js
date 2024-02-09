import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import TeaCards from "./components/TeaCards/TeaCards";
import Review from "./components/Review/Review";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <TeaCards/>
      <Review/>
      <Footer />
    </div>
  );
}
