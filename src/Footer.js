import React from "react";
import "./Footer.css";

const Footer = ({ page }) => {
  return (
    <div className={`footer ${page === 'login' || page === 'signup' ? 'fixed-footer' : 'normal-footer'}`}>
      <p style={{textAlign:"left"}}>Questions? Call 000-800-919-1694</p>
      <br/>
      <div className="footer-content">
        <div>
          <a href="https://help.netflix.com/en/node/412" style={{marginRight:"138px", color : "#aaa"}}>FAQ</a>
          <a href="https://help.netflix.com/en/"style={{marginRight:"80px", color : "#aaa"}}>Help Centre</a>
        </div>
        <div>
          <a href="https://help.netflix.com/legal/termsofuse"style={{marginRight:"80px", color : "#aaa"}}>Terms of Use</a>
          <a href="https://help.netflix.com/legal/privacy"style={{marginRight:"80px", color : "#aaa"}}>Privacy</a>
        </div>
        <div>
          <a href="https://www.netflix.com/in/"style={{marginRight:"40px", color : "#aaa"}}>Cookie Preferences</a>
          <a href="https://help.netflix.com/legal/corpinfo"style={{ color : "#aaa"}}>Corporate Information</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
