import React from "react";
import LoaderGif from "../../assets/gif/loader.gif";
import "./loader.css";

const Loader = ({ content }) => {
  return (
    <div className="loader_container">
      <div className="loader">
        <img src={LoaderGif} alt="Loading..." className="loader_gif" />
      </div>
      <div className="loader_content">{content}</div>
    </div>
  );
};

export default Loader;
