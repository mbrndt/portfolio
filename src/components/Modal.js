import {
  CloseSharp,
  FullscreenRounded,
  MinimizeSharp,
} from "@mui/icons-material";

import React from "react";
import "./Modal.css";

const MODAL_STYLES = {
  top: "50%",
  left: "50%",
  zIndex: 1000,
  minheight: "15rem",
  minwidth: "15rem",
  margin: "10px",
  background: "#fff",
  boxshadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.9",
  position: "fixed",
  transform: "translate(-50%, -50%)",
  textcolor: "black",
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
          <p id="header_title">
            home{">"}
            {title}
          </p>
          <button id="mod_button" onClick={onClose} style={CLOSEBUTTON_STYLES}>
            <div id="icons">
              <MinimizeSharp />
              <FullscreenRounded /> <CloseSharp />
            </div>
          </button>
        </div>
        <div id="content_background">
          <div className="title">{title && <h3>{title}</h3>}</div>
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
}
