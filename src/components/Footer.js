import React from "react";
import "./Footer.css";
import davinci from "../assets/davinci.png";
import figma from "../assets/figma.png";
import kakaotalk from "../assets/kakaotalk.png";
import spotify from "../assets/spotify.png";
import xd from "../assets/xd.png";
import youtube from "../assets/youtube.png";
import vs from "../assets/vs.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import chrome from "../assets/chrome.png";
import whatsapp from "../assets/whatsapp.png";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

export const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.youtube.com/channel/UCmDYNxaQ9rbzdzlFSfvECog"
        target="_blank"
      >
        <img src={youtube} alt="youtube icon" className="folder" />{" "}
      </a>

      <img src={davinci} alt="davinci icon" className="folder bk" />
      <img src={xd} alt="adobe xd icon" className="folder" />
      <img src={vs} alt="vs code icon" className="folder" />
      <a
        href="https://open.spotify.com/track/4EClxfvLJkpTg2jkZ4Cw2P?si=f13c7774d0d64288"
        target="_blank"
      >
        <img src={spotify} alt="spotify icon" className="folder" />
      </a>
      <img src={kakaotalk} alt="kakaotalk icon" className="folder" />
      <a
        href="https://www.linkedin.com/in/mareike-brandt-4911b520b/"
        target="_blank"
      >
        <img src={linkedin} alt="kakaotalk icon" className="folder" />
      </a>
      <a href="https://github.com/mbrndt" target="_blank">
        <img src={github} alt="kakaotalk icon" className="folder bk" />
      </a>
      <a
        href="https://www.google.com/search?q=how+to+change+font+colour+in+css&rlz=1C5CHFA_enDE790DE790&oq=how+to+change+font+colour+in+css&aqs=chrome..69i57j0i10l4j0i22i30l5.25401j0j7&sourceid=chrome&ie=UTF-8"
        target="_blank"
      >
        <img src={chrome} alt="chrome icon" className="folder bk" />
      </a>
      <a href="https://www.instagram.com/mareikebrndt/" target="_blank">
        <img src={instagram} alt="instagram icon" className="folder" />
      </a>
      <Badge badgeContent={1000} max={4} color="primary">
        <MailIcon color="white" />
      </Badge>
      <img src={whatsapp} alt="whatsapp icon" className="folder" />
    </div>
  );
};
