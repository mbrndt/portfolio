import React from "react";
import "./Footer.css";
import davinci from "../assets/davinci.png";
import figma from "../assets/figma.png";
import kakaotalk from "../assets/kakaotalk.png";
import spotify from "../assets/spotify.png";
import xd from "../assets/xd.png";
import youtube from "../assets/youtube.png";
import vs from "../assets/vs.png";

export const Footer = () => {
  return (
    <div className="footer">
      <img src={youtube} alt="folder" className="folder" />
      <img src={davinci} alt="folder" className="folder" />
      <img src={xd} alt="folder" className="folder" />
      <img src={vs} alt="folder" className="folder" />
      <img src={spotify} alt="folder" className="folder" />
      <img src={kakaotalk} alt="folder" className="folder" />
    </div>
  );
};
