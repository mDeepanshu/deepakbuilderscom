import React, { useEffect, useState, useRef } from "react";
import styles from "./callback.module.css";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Callback({ open, onClose, children, handleAdminPageChange }) {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const navigate = useNavigate();

  const submit = () => {
    // onClose();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;
    console.log(name, phone, message);

    if (name === "admin" && phone === "9876" && message === "admin") {
      // navigate("/admin"); // e.g. '/home', '/property/123', etc.
      handleAdminPageChange(true);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle className={styles.title}>GET IN TOUCH</DialogTitle>
      <DialogContent dividers>
        <div className={styles.content}>
          <div>
            <p>Fill in the following details and we will get back to you shortly.</p>
          </div>
          <div className={styles.form}>
            <div className={styles.input}>
              <label>Name*</label>
              <input className={styles.inputField} type="text" ref={nameRef} />
            </div>
            <div className={styles.input}>
              <label>Phone*</label>
              <input className={styles.inputField} type="text" ref={phoneRef} />
            </div>
            <div className={styles.input}>
              <label>Message*</label>
              <textarea className={styles.textArea} ref={messageRef} />
            </div>
            <div></div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={submit} color="success">
          Submit
        </Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Callback;
