import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import React from "react";

function Modal({ data, open, setOpen }) {
  function handleClose() {
    setOpen(false);
  }

  function handleCopy() {}

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Form data in JSON</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <pre onClick={(e) => console.log(e.target.childNodes[0].data)}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCopy}>Copy JSON</Button>
        <Button variant="outlined" onClick={handleClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
