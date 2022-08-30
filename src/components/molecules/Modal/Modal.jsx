import "./Modal.css";

import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useRef, useState } from "react";

function Modal({ data, open, setOpen }) {
  const [alert, setAlert] = useState(false);
  const ref = useRef();

  function handleClose() {
    setOpen(false);
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(ref.current.innerHTML);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Form data in JSON</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <pre ref={ref}>{JSON.stringify(data, null, 2)}</pre>
          </DialogContentText>

          {alert && (
            <Alert
              variant="outlined"
              severity="success"
              className="alert_container"
            >
              Copy!
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCopy}>Copy JSON</Button>
          <Button variant="outlined" onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Modal;
