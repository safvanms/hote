import React from "react";
import "./termsAndConditions.css";
import { termsAndConditions } from "../../constants";

const TermsAndConditions = () => {
  return (
    <div className="terms_and_condition GenFlex">
      <h1>Terms & Conditions</h1>
      {termsAndConditions.map(({ title, content, id }) => (
        <div key={id} className="t_and_c_content">
          <h2>{title }</h2>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default TermsAndConditions;
