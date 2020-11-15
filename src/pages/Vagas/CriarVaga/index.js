import { Typography, Button } from "@material-ui/core";
import {
  PaperStyled,
  Top,
  Line1,
  Line2,
  TextFieldStyled,
  ButtonsWraper,
} from "./styles";

import TabPanel from "../../../components/TabPanel";

import { routes } from "../../../utils";
import Breadcrumb from "../../../components/Breadcrumb";

export default function CriarVaga(props) {
  const breadcrumbInfo = [
    {
      nome: "Home",
      rota: routes.home,
    },
    {
      nome: "Sou Recrutador",
      rota: routes.home,
      // TODO: Mudar essa rota quando tiver sou recrutador
    },
    {
      nome: "Criar vaga",
    },
  ];

  return (
    <TabPanel value={props.value} index={0}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h5" gutterBottom>
          CRIAR VAGAS
        </Typography>
      </Top>
      <PaperStyled>
        <Line1>
          <TextFieldStyled
            fullWidth
            variant="outlined"
            size="small"
            placeholder="ESCREVA O NOME DA EMPRESA AQUI"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
          <TextFieldStyled
            fullWidth
            variant="outlined"
            size="small"
            placeholder="TÍTULO DA VAGA"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
          <TextFieldStyled
            variant="outlined"
            size="small"
            placeholder="TIPO"
            style={{
              width: "30%",
            }}
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
        </Line1>
        <Line2>
          <TextFieldStyled
            variant="outlined"
            size="small"
            placeholder="ÁREA"
            style={{
              width: "160%",
            }}
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
          <TextFieldStyled
            fullWidth
            variant="outlined"
            size="small"
            placeholder="NÍVEL"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
          <TextFieldStyled
            fullWidth
            variant="outlined"
            size="small"
            placeholder="CIDADE"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
          <TextFieldStyled
            variant="outlined"
            size="small"
            placeholder="PCD"
            style={{
              width: "30%",
            }}
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
        </Line2>
        <TextFieldStyled
          fullWidth
          variant="outlined"
          multiline
          rows={15}
          margin="normal"
          placeholder="DESCRITIVO DA VAGA"
          inputProps={{
            style: {
              textAlign: "center",
            },
          }}
        />
        <TextFieldStyled
          fullWidth
          variant="outlined"
          multiline
          rows={10}
          margin="normal"
          placeholder="REQUISITOS E DIFERENCIAIS LGBTQ+"
          inputProps={{
            style: {
              textAlign: "center",
            },
          }}
        />
        <ButtonsWraper>
          <Button variant="contained" color="secondary">
            SALVAR
          </Button>
          <Button variant="contained" color="primary">
            PUBLICAR
          </Button>
        </ButtonsWraper>
      </PaperStyled>
    </TabPanel>
  );
}
