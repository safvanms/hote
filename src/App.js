import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomeSection/Home/Home.jsx";
import Menu from "./components/Menu/Menu";
import Review from "./components/Review/Review";
import About from "./components/About/About";
import ScrollToTop from "./components/ScrollToTop";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Contacts from "./components/Contacts/Contacts";
import AllBlogs from "./components/BlogSection/AllBlogs/AllBlogs.jsx";
import Blog from "./components/BlogSection/Blog/Blog.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/*component for showing every component/page from top*/}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/terms-and-condition" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
