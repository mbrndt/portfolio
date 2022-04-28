import React, { useState } from "react";
import "./main.css";
import { saveAs } from "file-saver";
import Folder from "../assets/folder.png";
import Trash from "../assets/trash.png";
import Modal from "../components/Modal";

import FileModal from "../components/FileModal";

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
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  //

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

          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <p onClick={saveFile}>resume(eng)</p>
            <p onClick={saveFile}>resume(deutsch)</p>
          </Modal>
          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <img src={Folder} alt="folder" className="folder" />
            <p>projects</p>
          </button>
          {openModal && <FileModal closeModal={setOpenModal} />}
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
