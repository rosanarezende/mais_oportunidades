import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getJobById } from "../../../providers/jobs";

import { Close } from "@material-ui/icons";
import { Button, Dialog, Typography } from "@material-ui/core";
import { CloseIcon, DialogContentStyled, Span } from "./styles";

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
    open && dispatch(getJobById(vacancyIdSelected));
  }, [dispatch, vacancyIdSelected, open]);

  return job ? (
    <Dialog
      onClose={() => setOpen(false)}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CloseIcon aria-label="close" onClick={() => setOpen(false)}>
          <Close />
        </CloseIcon>
      </div>

      <DialogContentStyled dividers>
        <div>
          <Typography variant="h3" component="h2">
            {job.title?.toUpperCase()}
          </Typography>
          <Typography variant="h5" component="h3" gutterBottom>
            {job.role}
          </Typography>
        </div>

        <Typography variant="h6" component="h4" gutterBottom>
          {job.address}
        </Typography>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "5px",
          }}
        >
          <Typography variant="body1" gutterBottom>
            <span>
              <Span>Nível</Span>: {job.seniority?.name}
            </span>
          </Typography>

          <Typography variant="body1" gutterBottom>
            <span>
              <Span>Tipo de contratação</Span>: {job.category?.name}
            </span>
          </Typography>

          <Typography variant="body1" gutterBottom>
            <span>
              <Span>Área</Span>: {job.area?.name}
            </span>
          </Typography>
        </div>

        <Typography variant="body1" gutterBottom>
          {job.description}
        </Typography>

        <Typography variant="body1" gutterBottom>
          <span>
            <Span>Requisitos</Span>:
          </span>
          <div>{job.requirements}</div>
        </Typography>

        {job.isForPCD && (
          <Typography variant="body2" gutterBottom align="center">
            Aceita candidaturas <strong>PDC</strong>
          </Typography>
        )}

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            autoFocus
            variant="contained"
            color="primary"
            onClick={candidatar}
          >
            Candidatar
          </Button>
        </div>
      </DialogContentStyled>
    </Dialog>
  ) : (
    <div></div>
  );
}
