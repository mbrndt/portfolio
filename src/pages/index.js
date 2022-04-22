import React, { useState } from "react";
import "./main.css";
import Folder from "../assets/folder.png";
import Trash from "../assets/trash.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Main = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
