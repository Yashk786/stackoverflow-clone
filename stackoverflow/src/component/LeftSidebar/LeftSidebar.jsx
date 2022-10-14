import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../assests/global-icon.png";

const LeftSidebar = () => {
  return (
    <div className="Left-Sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClassName="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/Question"
            className="side-nav-links"
            activeClassName="active"
          >
            <img src={Globe} alt="Globe" width={15} />
            <p style={{ paddingLeft: "10px" }}>Questions</p>
          </NavLink>
          <NavLink
            to="/tags"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "40px" }}
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/tags"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "40px" }}
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
