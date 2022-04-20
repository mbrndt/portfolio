import React from "react";
import "./main.css";
import Folder from "../assets/folder.png";

export const Main = () => {
  return (
    <div className="main">
      <div className="column1">
        <img src={Folder} alt="folder" className="folder" />
        <p>trash</p>
      </div>
      <div className="column2">
        <img src={Folder} alt="folder" className="folder" />
        <p>projects</p>
        <img src={Folder} alt="folder" className="folder" />
        <p>aboutMe</p>
      </div>
      <div className="column3">
        <img src={Folder} alt="folder" className="folder" />
        <p>Programme</p>
        <img src={Folder} alt="folder" className="folder" />
        <p>Jakobs10UsabilityHeuristi...Posters4</p>
        <img src={Folder} alt="folder" className="folder" />
        <p>Bildschirmfotos</p>
      </div>
    </div>
  );
};
