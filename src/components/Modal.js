import React from "react";
import "./Modal.css";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "gray",
  padding: "20px",
  zIndex: 1000,
  height: "15rem",
  width: "15rem",
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
  right: "10px",
  textshadow: "none",
};

export default function Modal({ open, children, onClose, title }) {
  if (!open) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div className="modal" style={MODAL_STYLES}>
        <button onClick={onClose} style={CLOSEBUTTON_STYLES}>
          X
        </button>
        <div className="title">{title && <h3>{title}</h3>}</div>
        {children}
      </div>
    </>
  );
}
