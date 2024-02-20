import React, { useRef, useState } from "react";
import "./review.css";
import Logo from "../../assets/images/hoté_intl_logo.png";
import emailjs from "@emailjs/browser";

const reviewStuff =
  "We value your reviews either positive or negative. Your feedback helps us improve our services and serve you better. Thank you for taking the time to share your thoughts with us. Your opinions matter to us and contribute to the continual enhancement of our offerings. We strive to provide an exceptional experience to each and every customer, and your feedback plays a crucial role in achieving that goal. Your satisfaction is our priority, and we are grateful for your support. Your reviews inspire us to maintain the highest standards of quality and customer service. We appreciate your trust and loyalty to our brand and look forward to serving you again soon and exceeding your expectations. Thank you for choosing us as your preferred destination for hoté intl and for being a valued member of our community.";

const Review = () => {
  const [clicked, setClicked] = useState(false);
  const [done, setDone] = useState(false);
  const [expand, setExpand] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const form = useRef();

  // function calls when onSubmitting for sent to the email
  const sendEmail = (e) => {
    e.preventDefault();
    if (!clicked) {
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
    }
  };

  const toggleExpand = () => {
    setExpand(!expand);
  };

  // function for alerting the warning message for the user when typing the message textarea
  const handleKeyPress = (e) => {
    if (showWarning === true) {
      return;
    } else if (e.key !== "Backspace" && e.target.value.trim().length >= 0) {
      alert(
        "Please refrain from including any inappropriate / sexual / racist or abusive contents in your review."
      );
      setShowWarning(true);
    }
  };

  console.log(clicked)

  return (
    <>
      <div className="review GenFlex" id="review">
        <div className="review_container GenFlex">
          <div className="review_left GenFlex">
            <img src={Logo} alt="item" />
          </div>
          <div className="review_right">
            <h1>Write your Reviews and Feedbacks</h1>

            <form onSubmit={sendEmail} ref={form}>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
              />
              <input
                type="text"
                name="account"
                placeholder="Enter your email / Phone Number"
                required
              />
              <textarea
                onKeyPress={handleKeyPress}
                type="text"
                rows={4}
                name="message"
                placeholder="Write your reviews / feedback / suggestions or Blogs here..."
                required
              />
              <button
                type="submit"
                value="Send"
                className={clicked ? "disabled" : "submit_button"}
                disabled={clicked}
              >
                {clicked ? "Sending" : done ? "Sent" : "Send"}
              </button>

              {done && "Thanks for your Feedback :) "}
            </form>
          </div>
        </div>
        <div className="GenFlex">
          <p className="review_stuff ">
            {expand ? reviewStuff : reviewStuff.slice(0, 150) + "..."}
            <span
              onClick={toggleExpand}
              style={{ cursor: "pointer", color: "darkblue" }}
            >
              {expand ? " read less" : "read more"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
