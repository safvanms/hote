import React from "react";
import "./home_review.css";
import { useNavigate } from "react-router-dom";
import Write from "../../assets/images/write.jpg";
import Button from "../Button/Button";

const HomeReview = () => {
  const navigate = useNavigate();

  const openAllBlogs = () => {
    navigate("/review" );
  };

  return (
    <div className="h_review GenFlex">
      <div className="h_review_heading GenFlex">
        <h2>Write what do you feel about us. </h2>
        <p onClick={openAllBlogs}> Write a Feedback </p>
      </div>

      <div className="h_review_section">
        <img src={Write} alt="feedback" />
      </div>

      <div className="h_review_btn" onClick={openAllBlogs}>
        <Button content={"Write a Feedback"} bg={"#362819"} />
      </div>
    </div>
  );
};

export default HomeReview;
