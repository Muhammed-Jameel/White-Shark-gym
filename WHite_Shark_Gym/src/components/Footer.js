import React from "react";
import { Logo } from "../assets";
import { Row, Column } from "./LayoutGrid";

const Footer = () => {
  return (
    <>
      <Row className="footer-container">
        <Column span="4" className="footer-logo-side">
          <img src={Logo} className="footer-logo" alt="logo" />

          <p>CopyRights Reserved 2023</p>
        </Column>

        <Column span="7" className="footer-links-side">
          <div>
            <h3>Social media</h3>
            <a href="#">
              <p>Instagram</p>
            </a>
            <a href="#">
              <p>FaceBook</p>
            </a>
            <a href="#">
              <p>Twitter</p>
            </a>
            <a href="#">
              <p>Reddit</p>
            </a>
          </div>

          <div>
            <h3>Locations</h3>
            <a href="#">
              <p>Karadah</p>
            </a>
            <a href="#">
              <p>Mansoor</p>
            </a>
            <a href="#">
              <p>Zaionah</p>
            </a>
          </div>

          <div>
            <h3>Sections</h3>
            <a href="#">
              <p>Instagram</p>
            </a>
            <a href="#">
              <p>FaceBook</p>
            </a>
            <a href="#">
              <p>Twitter</p>
            </a>
            <a href="#">
              <p>Reddit</p>
            </a>
          </div>

          <div>
            <h3>Other</h3>
            <a href="#">
              <p>Support</p>
            </a>
            <a href="#">
              <p>Prices</p>
            </a>
          </div>
        </Column>
      </Row>
    </>
  );
};

export default Footer;
