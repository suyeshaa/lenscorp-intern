import React from "react";
import bg from "../assets/bg.jpg";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar></Navbar>
      <div className="header-contents">
        <div className="topic">
          <h1>Deploying PyTorch Applications using C++</h1>
        </div>
        <div className="by-date">
          <div className="by">Azhan Mohammed</div>
          <div>|</div>
          <div className="date">December 28, 2021</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
