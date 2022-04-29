import React from "react";
import "./Modal.css";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textcolor: "black",
  backgroundColor: "#F2EDEB",
  padding: "10px",
  zIndex: 1000,
  minheight: "15rem",
  width: "15rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .4)",
  zIndex: 1000,
};

const CLOSEBUTTON_STYLES = {
  textshadow: "none",
  backgroundColor: "CCDAD1",
};

const HEADER_STYLES = {
  fontSize: "1.5rem",
};

export default function Modal({ open, children, onClose, title, Folder }) {
  if (!open) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div className="modal" style={MODAL_STYLES}>
        <div className="headerbar" style={HEADER_STYLES}>
          <p id="headertitle">
            home{">"}
            {title}
          </p>
          <button id="modbutton" onClick={onClose} style={CLOSEBUTTON_STYLES}>
            _ [] X
          </button>
        </div>
        <div className="title">{title && <h3>{title}</h3>}</div>
        {children}
      </div>
    </>
  );
}
