import { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { Top, Line01, Line02, Line03, ButtonsWraper, Form } from "./styles";

import TabPanel from "../../../../components/TabPanel";
import Breadcrumb from "../../../../components/Breadcrumb";

import { routes } from "../../../../routes";

export default function MeuPerfil(props) {
  const breadcrumbInfo = [
    {
      nome: "Home",
      rota: routes.landingPage,
    },
    {
      nome: "Sou Recrutador",
      rota: routes.homeRecrutador,
      // TODO: Mudar essa rota quando tiver sou recrutador
    },
    {
      nome: "Meu Perfil",
    },
  ];

  const [input, setInput] = useState({
    cnpj: "",
    empresa: "",
    segmento: "",
    local: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <TabPanel value={props.value} index={2}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h5" gutterBottom>
          MEU PERFIL
        </Typography>
      </Top>

      <Form>
        <Line01>
          <TextField
            required
            name="cnpj"
            value={input.cnpj || ""}
            onChange={changeInput}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="CNPJ"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
        </Line01>
        <Line02>
          <TextField
            required
            name="empresa"
            value={input.empresa || ""}
            onChange={changeInput}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="NOME DA EMPRESA AQUI"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
          <TextField
            required
            name="segmento"
            value={input.segmento || ""}
            onChange={changeInput}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="SEGMENTO"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
        </Line02>
        <Line03>
          <TextField
            required
            name="local"
            value={input.local || ""}
            onChange={changeInput}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="LOCALIZAÇÃO"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
        </Line03>
        <TextField
          fullWidth
          variant="outlined"
          multiline
          rows={15}
          margin="normal"
        />
        <ButtonsWraper>
          <Button variant="contained" color="secondary" type="submit">
            SALVAR
          </Button>
          <Button variant="contained" color="primary">
            PUBLICAR
          </Button>
        </ButtonsWraper>
      </Form>
    </TabPanel>
  );
}
