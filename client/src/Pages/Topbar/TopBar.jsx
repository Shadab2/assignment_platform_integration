import React from "react";
import { Link } from "react-router-dom";
import { IoLogoXing } from "react-icons/io";
import "./topbar.css";

function TopBar() {
  return (
    <div className="topbar">
      <Link to="/" className="logo">
        <IoLogoXing color="white" size={20} />
        <span className="logo-text-i">ToDo's</span>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
        to="/profile"
      >
        Profile
      </Link>
    </div>
  );
}

export default TopBar;
