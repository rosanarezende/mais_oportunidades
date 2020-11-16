import { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { Top, Line01, Line02, Line03, ButtonsWraper, Form } from "./styles";

import TabPanel from "../../../components/TabPanel";

import { routes } from "../../../utils";
import Breadcrumb from "../../../components/Breadcrumb";

export default function MeuPerfil(props) {
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
      nome: "Meu Perfil",
    },
  ];

  const [input, setInput] = useState({
    cnpj: "",
    tempresa: "",
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
            value={input.nome || ""}
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
            value={input.nome || ""}
            onChange={changeInput}
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
          <TextField
            required
            name="segmento"
            value={input.nome || ""}
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
            value={input.nome || ""}
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
