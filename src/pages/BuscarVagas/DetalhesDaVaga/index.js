import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getJobById } from "../../../providers/jobs";

import { Button, Dialog, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import {
  CloseIcon,
  Title,
  DialogActionsStyled,
  DialogContentStyled,
  Span
} from "./styles";

// import image from "../../../assets/image.jpg";

export default function DetalhesDaVaga(props) {
  const dispatch = useDispatch();
  const { open, setOpen, vacancyIdSelected } = props;
  const { job } = useSelector((state) => state.jobsReducer);
  // console.log(job);
  
  const candidatar = () => {
    setOpen(false);
    // colocar a lógica de candidatura
  };

  useEffect(() => {
    dispatch(getJobById(vacancyIdSelected));
  }, [dispatch, vacancyIdSelected]);

  return job ? (
    <Dialog
      onClose={() => setOpen(false)}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
    >
      <Title disableTypography>
        <Typography variant="h5" component="h2">{job.title?.toUpperCase()}</Typography>
        <CloseIcon aria-label="close" onClick={() => setOpen(false)}>
          <Close />
        </CloseIcon>
      </Title>

      <DialogContentStyled dividers>
        <Typography variant="h6" gutterBottom>
          {job.role?.toUpperCase()} - {job.seniority?.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Span>Empresa</Span><span>: </span>
          {job.factory?.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {/* <strong>Endereço: </strong> */}
          <Span>Endereço</Span><span>: </span>
          {job.address}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {/* <strong>Descrição: </strong> */}
          <Span>Descrição</Span><span>: </span>
          {job.description}
        </Typography>
        {job.isForPCD && ( 
          <Typography variant="body2" gutterBottom align="right">
            Aceita candidaturas <strong>PDC</strong>
          </Typography>
        )}
      </DialogContentStyled>

      <DialogActionsStyled>
        <Button
          autoFocus
          variant="contained"
          color="primary"
          onClick={candidatar}
        >
          Candidatar
        </Button>
      </DialogActionsStyled>
    </Dialog>
  ) : (
    <div></div>
  );
}
