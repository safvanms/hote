import React, { useRef, useState } from "react";
import "./review.css";
import coffee from "../../assets/images/coffee.jpg";
import emailjs from "@emailjs/browser";

const Review = () => {
  const [clicked, setClicked] = useState(false);
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setClicked(true);
    emailjs
      .sendForm(
        "service_f21mj6a",
        "template_cxfddan",
        form.current,
        "3WioZUouk2DZQ6kQE"
      )
      .then(
        (result) => {
          e.target.reset();
          setClicked(false);
          setDone(true);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  return (
    <div className="review">
      <div className="review_container GenFlex">
        <div className="review_left GenFlex">
          <img src={coffee} alt="item" />
        </div>
        <div className="review_right">
          <h1>Write a Review</h1>

          <form onSubmit={sendEmail} ref={form}>
            <input
              type="text"
              name="account"
              placeholder="Enter your email / Phone Number"
              required
            />
            <textarea
              type="text"
              name="message"
              placeholder="Message..."
              required
            />
            <button type="submit" value="Send">
              {clicked ? "Sending" : done ? "Sent" : "Send"}
            </button>
            {done && "Thanks for your Review :) "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
