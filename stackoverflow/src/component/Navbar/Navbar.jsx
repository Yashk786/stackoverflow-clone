import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import search from "../assests/search.svg";
// import Button from "../Button/Button";
import Avatar from "../Avatar/Avarar";
import "./Navbar.style.css";

const Navbar = () => {
  var user = null;

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" width={150} />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="search..." />
          <img src={search} alt="search" width={16} className="search-icon" />
        </form>
        {user === null ? (
          <Link to={"/Auth"} className="nav-item nav-links">
            Login
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="12px"
              py="6px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to={"/user"}
                style={{ color: "white", textDecoration: "none" }}
              >
                S
              </Link>
            </Avatar>

            <button className="nav-item nav-links">Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
