import React from "react";
import { Logo } from "../assets";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>

        <div className="navbar-links">
          <div className="sections">
            <NavLink to="/classes">
              <p className="navbar-link">Classes</p>
            </NavLink>

            <NavLink to="/bmi-calculator">
              <p className="navbar-link">BMI calculator</p>
            </NavLink>

            <NavLink to="/trainers">
              <p className="navbar-link">Trainers</p>
            </NavLink>

            <NavLink to="/blogs">
              <p className="navbar-link">Blogs</p>
            </NavLink>
          </div>

          <div >
            <button className="signing-link">
              <NavLink to="/signup">
                <p className="navbar-link">Sign In/Up</p>
              </NavLink>
            </button>
          </div>
        </div>

        <div className="toggle-menu"></div>
      </div>
    </>
  );
};

export default NavBar;
