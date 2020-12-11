import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setAlert } from "../../actions/alert";

import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { DialogStyled, CloseIcon } from "./styles";

function Alert() {
  const dispatch = useDispatch();
  const { open, text, title, confirm } = useSelector(
    (state) => state.alertReducer
  );

  const handleClose = () => {
    dispatch(setAlert(false));
  };

  return (
    <DialogStyled
      open={open}
      onClose={handleClose}
      fullWidth
    >
      <div>
        <CloseIcon onClick={handleClose}>
          <Close />
        </CloseIcon>
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          <DialogContentText>
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
      </div>
    </DialogStyled>
  );
}

export default Alert;
