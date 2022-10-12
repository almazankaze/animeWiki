import React from "react";
import { useLocation } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import DevicesIcon from "@mui/icons-material/Devices";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

import "./footer.css";

function Footer() {
  const location = useLocation();

  if (location.pathname === "/notfound") return null;

  return (
    <div className="footer">
      <div className="footer-container app-container">
        <div className="footer-col">
          <div className="footer-info-container">
            <DevicesIcon className="footer-logo" titleAccess="AniSearch" />
            <h2 className="footer-title">AniSearch</h2>
          </div>
          <div className="footer-info-container">
            <EmailIcon titleAccess="email" />
            <h4 className="footer-info-text">anisearch@example.com</h4>
          </div>
          <div className="footer-info-container">
            <PhoneIcon titleAccess="phone" />
            <h4 className="footer-info-text">0555-010101</h4>
          </div>
          <div className="footer-info-container">
            <LocationOnIcon titleAccess="address" />
            <h4 className="footer-info-text">123 fake st, Nowhere</h4>
          </div>
        </div>
        <div className="footer-col">
          <h3 className="footer-heading">Useful Links</h3>
          <div className="footer-links">
            <div className="footer-link">
              <h4>Terms & Conditions</h4>
            </div>
            <div className="footer-link">
              <h4>New Products</h4>
            </div>
            <div className="footer-link">
              <h4>News</h4>
            </div>
            <div className="footer-link">
              <h4>Services</h4>
            </div>
            <div className="footer-link">
              <h4>About us</h4>
            </div>
            <div className="footer-link">
              <h4>Careers</h4>
            </div>
            <div className="footer-link">
              <h4>Contact us</h4>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <h3 className="footer-heading">Get the latest anime news</h3>
          <form className="footer-form">
            <input
              type="email"
              className="footer-input"
              autoComplete="off"
              placeholder="Your email address"
              name="emailText"
              noValidate
              required
            />
            <SendIcon className="footer-form-icon" />
          </form>
          <div className="footer-social-icons">
            <div className="social-icon icon-inst">
              <InstagramIcon titleAccess="instagram" />
            </div>
            <div className="social-icon icon-face">
              <FacebookOutlinedIcon titleAccess="facebook" />
            </div>
            <div className="social-icon icon-twit">
              <TwitterIcon titleAccess="twitter" />
            </div>
            <div className="social-icon icon-you">
              <YouTubeIcon titleAccess="youtube" />
            </div>
          </div>
        </div>
      </div>
      <h5 className="footer-copyright">© 2022 Example. All rights reserved</h5>
    </div>
  );
}

export default Footer;
