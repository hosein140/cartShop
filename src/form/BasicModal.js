import * as React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  alignItems: "center",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ children, modalOpen, modalClose }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ margin: "25%" }}>
      <Modal
        open={handleOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box
            id="modal-modal-description"
            sx={{
              top: "-30px",
              left: "-30px",
              transform: "translate(-5%, -20%)",
              alignItems: "center",
              justifyItems: "center",
            }}>
            {children}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
