import {
  CloseIcon,
  Title,
  DialogActionsStyled,
  DialogContentStyled,
} from "./styles";
import { Button, Dialog, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import image from "../../../assets/image.jpg";

const vemDaApi = [
  {
    id: 1,
    cargo: "Pessoa desenvolvedora web",
    empresa: "Empresa X",
    area: "desenvolvimento",
    image,
  },
  {
    id: 2,
    cargo: "Design",
    empresa: "Empresa Y",
    area: "design",
    image,
  },
  {
    id: 3,
    cargo: "Advogado(a)",
    empresa: "Empresa X",
    area: "juridico",
    image,
  },
];

export default function DetalhesDaVaga(props) {
  const { open, setOpen, vacancyIdSelected } = props;
  const vancancy = vemDaApi.filter((item) => item.id === vacancyIdSelected)[0];

  const candidatar = () => {
    setOpen(false);
    // colocar a lógica de candidatura
  };

  return (
    <Dialog
      onClose={() => setOpen(false)}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="false" // 'lg' ou 'md'
    >
      <Title disableTypography>
        <Typography variant="h6">{vancancy?.cargo}</Typography>
        <CloseIcon aria-label="close" onClick={() => setOpen(false)}>
          <Close />
        </CloseIcon>
      </Title>

      <DialogContentStyled dividers>
        <Typography variant="h6" gutterBottom>
          Lorem Ipsun
        </Typography>
        <Typography variant="body1" gutterBottom>
          Tempor tempor pariatur eu deserunt ullamco. Magna qui ullamco tempor
          aute.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </Typography>
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
  );
}
