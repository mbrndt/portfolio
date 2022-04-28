import React from "react";
import "./Modal.css";

function FileModal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> x </button>
        </div>
        <div className="title">
          <h1>are you sure you want to continue?</h1>
        </div>
        <div className="body">
          <p>The next page is awesome.</p>
        </div>
        <div className="footer">
          <p>good job</p>
        </div>
      </div>
    </div>
  );
}

export default FileModal;
