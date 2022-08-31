import "./Modal.css";

import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
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
      >
        <DialogTitle id="alert-dialog-title">Form data in JSON</DialogTitle>
        <DialogContent>
          <pre className="json_text" ref={ref}>
            {JSON.stringify(data, null, 2)}
          </pre>

          {alert && (
            <Alert
              variant="outlined"
              severity="success"
              className="alert_container"
            >
              Copied!
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
