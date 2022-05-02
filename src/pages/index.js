import React, { useState } from "react";
import "./main.css";
import { saveAs } from "file-saver";
import Folder from "../assets/folder.png";
import Trash from "../assets/trash.png";
import Modal from "../components/Modal";
import Resumepdf from "../assets/MareikeBrandt.pdf";
import Jakob1 from "../assets/jakob/Jakob1.pdf";
import Jakob2 from "../assets/jakob/Jakob2.pdf";
import Jakob3 from "../assets/jakob/Jakob3.pdf";
import Jakob4 from "../assets/jakob/Jakob4.pdf";
import Jakob5 from "../assets/jakob/Jakob5.pdf";
import Jakob6 from "../assets/jakob/Jakob6.pdf";
import Jakob7 from "../assets/jakob/Jakob7.pdf";
import Jakob8 from "../assets/jakob/Jakob8.pdf";
import Jakob9 from "../assets/jakob/Jakob9.pdf";
import Jakob10 from "../assets/jakob/Jakob10.pdf";
import JkobMary from "../assets/jakob/JkobMary.pdf";

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
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="main">
      <div className="column1" align="left">
        <img src={Trash} alt="trash-icon" className="trash" />
        <p className="trash_p">trash</p>
      </div>
      <div className="column2">
        <div className="item">
          <button onClick={() => setIsOpen(true)}>
            <img src={Folder} alt="folder-icon" className="folder" />
            <p>AboutMe</p>
          </button>
          <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            title={"About Me"}
          >
            <a
              href={Resumepdf}
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              mbrandt_resume.pdf
            </a>

            <a
              href={Resumepdf}
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              mbrandt_resume(1).pdf
            </a>
          </Modal>

          <button onClick={() => setIsOpen2(true)}>
            <img src={Folder} alt="folder-icon" className="folder" />
            <p>projects</p>
          </button>
          <Modal
            open={isOpen2}
            onClose={() => setIsOpen2(false)}
            title={"projects"}
            Folder={"Folder"}
          >
            <a
              href="https://mareblog.vercel.app/"
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              choonsik.com
            </a>
            <a
              href="https://www.canva.com/design/DAE_QUNcCng/tzNyoKPmAKAz7L_40m7EPQ/view"
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              choonsik_documentantion.com
            </a>
            <a
              href="https://www.canva.com/design/DAEyHVlSk5Y/XzWWxcXr4IFtTtvgEz4xQg/view#1"
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              chonsa_documentation.com
            </a>
          </Modal>
        </div>
      </div>
      <div className="column3">
        <img src={Folder} alt="folder-icon" className="folder" />
        <p>Programme</p>

        <button onClick={() => setIsOpen3(true)}>
          <img src={Folder} alt="folder-icon" className="folder" />
          <p>Jakobs10UsabilityHeuristi...Posters4</p>
        </button>
        <Modal
          open={isOpen3}
          onClose={() => setIsOpen3(false)}
          title={"Jakobs10..."}
        >
          <a href={Jakob1} without rel="noopener noreferrer" target="_blank">
            NNg Jako...ristic 1.pdf
          </a>
          <a href={Jakob2} without rel="noopener noreferrer" target="_blank">
            NNg Jako...ristic 2.pdf
          </a>
          <a href={Jakob3} without rel="noopener noreferrer" target="_blank">
            NNg Jako...ristic 3.pdf
          </a>
          <a href={Jakob4} without rel="noopener noreferrer" target="_blank">
            NNg Jako...ristic 4.pdf
          </a>
          <a href={Jakob5} without rel="noopener noreferrer" target="_blank">
            NNg Jako...ristic 5.pdf
          </a>
          <a href={Jakob6} without rel="noopener noreferrer" target="_blank">
            NNg Jako...ristic 6.pdf
          </a>
          <a href={Jakob7} without rel="noopener noreferrer" target="_blank">
            NNg Jako...ristic 7.pdf
          </a>
          <a href={Jakob8} without rel="noopener noreferrer" target="_blank">
            NNg Jako...ristic 8.pdf
          </a>
          <a href={Jakob9} without rel="noopener noreferrer" target="_blank">
            NNg Jako...ristic 9.pdf
          </a>
          <a href={Jakob10} without rel="noopener noreferrer" target="_blank">
            NNg Jako...ristic 10.pdf
          </a>
          <a href={JkobMary} without rel="noopener noreferrer" target="_blank">
            NNg Jako...mary 1.pdf
          </a>
        </Modal>
        <div>
          <img src={Folder} alt="folder-icon" className="folder" />
          <p>Bildschirmfotos</p>
        </div>
      </div>
    </div>
  );
};
