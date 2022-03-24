import React from "react";
import Logo from "../../Components/Logo/Logo";
import "./tobbar.css";

function TopBar() {
  return (
    <div className="topbar">
      <Logo />
      <div className="right">Right</div>
    </div>
  );
}

export default TopBar;
