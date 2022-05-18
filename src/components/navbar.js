import React, { useEffect, useState } from "react";
import "./navbar.css";
import Ai from "../assets/ai.png";
import Search from "../assets/search.png";
import Wifi from "../assets/wifi-signal.png";
import PostmanIcon from "../assets/postman.jpg";

export const Navbar = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 100);
  }, []);

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
      <img src={PostmanIcon} alt="Postman icon" className="icon2" />
      <img src={Search} alt="search icon" className="search" />
      <p>
        {" "}
        정선,{" "}
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })}
        , korean standard time
      </p>
    </nav>
  );
};
