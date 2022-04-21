import React from "react";
import "./main.css";
import Folder from "../assets/folder.png";
import Trash from "../assets/trash.png";

export const Main = () => {
  return (
    <div className="main">
      <div className="column1" align="left">
        <img src={Trash} alt="trash" className="trash" />
        <p className="trash_p">trash</p>
      </div>
      <div className="column2">
        <div className="item">
          <img src={Folder} alt="folder" className="folder" />
          <p>projects</p>
        </div>
        <div className="item">
          <img src={Folder} alt="folder" className="folder" />
          <p>aboutMe</p>
        </div>
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
