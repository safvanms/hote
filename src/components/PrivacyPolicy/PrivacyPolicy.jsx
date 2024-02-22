import React from "react";
import "./privacyPolicy.css";
import { privacyPolicy } from "../../constants";

const PrivacyPolicy = () => {
  return (
    <div className="privacy_policy GenFlex">
      <h1>Privacy Policy</h1>
      {privacyPolicy.map(({ title, content, id }) => (
        <div key={id} className="privacy_policy_content">
          <h2>{title }</h2>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
