import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setAlert } from "../../actions/alert";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";

function Alert() {
  const dispatch = useDispatch();
  const { open, text, title, confirm } = useSelector(
    (state) => state.alertReducer
  );

  const handleClose = () => {
    dispatch(setAlert(false));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="sm"
    >
      {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>

      {confirm && (
        <DialogActions>
          <Button onClick={handleClose} color={confirm.color} autoFocus>
            {confirm.text}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}

export default Alert;
