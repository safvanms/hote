import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer GenFlex">
      <p>© {year} hoté intl . All right reserved.</p>
    </div>
  );
};

export default Footer;
