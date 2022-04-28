import React, { useState } from "react";
import "./main.css";
import { saveAs } from "file-saver";
import Folder from "../assets/folder.png";
import Trash from "../assets/trash.png";
import Modal from "../components/Modal";

export const Main = () => {
  // download file
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
  };
  //
  //modal
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="main">
      <div className="column1" align="left">
        <img src={Trash} alt="trash" className="trash" />
        <p className="trash_p">trash</p>
      </div>
      <div className="column2">
        <div className="item">
          <button onClick={() => setIsOpen(true)}>
            <img src={Folder} alt="folder" className="folder" />
            <p>AboutMe</p>
          </button>
          <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            title={"About Me"}
          >
            <p onClick={saveFile}>resume(eng)</p>
          </Modal>

          <button onClick={() => setIsOpen2(true)}>
            <img src={Folder} alt="folder" className="folder" />
            <p>projects</p>
          </button>
          <Modal
            open={isOpen2}
            onClose={() => setIsOpen2(false)}
            title={"projects"}
          >
            <a href="https://mareblog.vercel.app/">choonsik</a>
            <p>projects modal</p>
          </Modal>
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
