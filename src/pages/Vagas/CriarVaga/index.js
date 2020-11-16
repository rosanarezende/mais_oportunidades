import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { setAlert } from "../../../actions/alert";

import { Typography, Button } from "@material-ui/core";
import {
  Top,
  Line1,
  Line2,
  TextFieldStyled,
  ButtonsWraper,
  Form,
} from "./styles";

import TabPanel from "../../../components/TabPanel";

import { routes } from "../../../utils";
import Breadcrumb from "../../../components/Breadcrumb";

export default function CriarVaga(props) {
  const dispatch = useDispatch();
  const { open, text } = useSelector((state) => state.alertReducer);
  console.log(open, text);

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

  const [input, setInput] = useState({
    nome: "",
    titulo: "",
    tipo: "",
    area: "",
    nivel: "",
    cidade: "",
    pcd: "",
    descricao: "",
    requisitos: "",
    cargo: "",
    sinonimos: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({});
    alert("vaga cadastrada com sucesso");
  };

  const publicarVaga = () => {
    // alert("vaga publicada com sucesso");
    dispatch(push(setAlert(true, "Vaga publicada com sucesso.")));
  };
  return (
    <TabPanel value={props.value} index={0}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h5" gutterBottom>
          CRIAR VAGA
        </Typography>
      </Top>
      <Form onSubmit={handleSubmit}>
        <Line1>
          <TextFieldStyled
            required
            name="nome"
            value={input.nome || ""}
            onChange={changeInput}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="NOME DA EMPRESA"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
          <TextFieldStyled
            required
            name="titulo"
            value={input.titulo || ""}
            onChange={changeInput}
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
            required
            name="tipo"
            value={input.tipo || ""}
            onChange={changeInput}
            variant="outlined"
            size="small"
            placeholder="TIPO DE CONTRATAÇÃO"
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
        <Line1>
          <TextFieldStyled
            required
            name="cargo"
            value={input.cargo || ""}
            onChange={changeInput}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="CARGO"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
          <TextFieldStyled
            required
            name="sinonimos"
            value={input.sinonimos || ""}
            onChange={changeInput}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="SINÔNIMOS (separe os nomes por vírgulas)"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
        </Line1>
        <Line2>
          <TextFieldStyled
            required
            name="area"
            value={input.area || ""}
            onChange={changeInput}
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
            required
            name="nivel"
            value={input.nivel || ""}
            onChange={changeInput}
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
            required
            name="cidade"
            value={input.cidade || ""}
            onChange={changeInput}
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
            required
            name="pcd"
            value={input.pcd || ""}
            onChange={changeInput}
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
          required
          name="descricao"
          value={input.descricao || ""}
          onChange={changeInput}
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
          required
          name="requisitos"
          value={input.requisitos || ""}
          onChange={changeInput}
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
          <Button variant="contained" color="secondary" type="submit">
            SALVAR
          </Button>
          <Button variant="contained" color="primary" onClick={publicarVaga}>
            PUBLICAR
          </Button>
        </ButtonsWraper>
      </Form>
    </TabPanel>
  );
}
