import React from "react";
import "./navbar.css";
import Ai from "../assets/ai.png";
import Heart from "../assets/heart.png";
import Search from "../assets/search.png";
import Wifi from "../assets/wifi-signal.png";
import moment from "moment";

const currentDateTime = Date().toLocaleString();

export const Navbar = () => {
  return (
    <nav>
      <img src={Ai} alt="heart icon" className="icon" />
      <p>mareike brandt</p>

      <p>Edit</p>
      <p>Selection</p>
      <p>View</p>
      <p>Go</p>

      <p>Window</p>
      <p>Help</p>
      <p>Terminal</p>
      <img src={Wifi} alt="wifi icon" className="icon2" />

      <img src={Search} alt="folder" className="search" />
      <p> 정선, {currentDateTime}</p>
    </nav>
  );
};
