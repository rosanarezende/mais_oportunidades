import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";

function CadastroRecrutador(props) {
  const { openRecrutador, setOpenRecrutador } = props;

  const handleClose = () => {
    setOpenRecrutador(false);
  };

  return (
    <Dialog
      open={openRecrutador}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">xxx</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          xxxxx
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          xxxx
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CadastroRecrutador;
