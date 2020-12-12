import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditorState } from "draft-js";

import { setAlert } from "../../../../actions/alert";

import { Typography, TextField, Button } from "@material-ui/core";
import { PaperStyled, Top, Form, Line } from "./styles";

import TabPanel from "../../../../components/TabPanel";
import Breadcrumb from "../../../../components/Breadcrumb";
import EditorInput, {
  formatEditorOutput,
} from "../../../../components/EditorInput";

import ExperienciaProfissional from "./ExperienciaProfissional";
import FormacaoAcademica from "./FormacaoAcademica";
import RedesSociais from "./RedesSociais";

export default function Curriculo(props) {
  const dispatch = useDispatch();
  const [dadosPessoais, setDadosPessoais] = useState({
    nome: "",
    telefone: "",
    endereco: "",
  });
  const [experiencias, setExperiencias] = useState([
    {
      empresa: "",
      cargo: "",
      descricao: "",
      atual: false,
      inicio: "",
      fim: "",
    },
  ]);
  const [formacoes, setFormacoes] = useState([
    {
      curso: "",
      nivel: "",
      instituicao: "",
      observacoes: "",
      atual: false,
      inicio: "",
      fim: "",
    },
  ]);
  const [linkedin, setLinkedin] = useState("");
  const [redesSociais, setRedesSociais] = useState([]);
  const [carta, setCarta] = useState(EditorState.createEmpty());
  const cartaFormatada = formatEditorOutput(carta);

  const breadcrumbInfo = [
    { nome: "Home", rota: "/" },
    { nome: "Sou Candidato", rota: "/candidato" },
    { nome: "Currículo" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, telefone, endereco } = dadosPessoais;
    const data = {
      nome,
      telefone,
      endereco,
      cartaFormatada,
      experiencias,
      formacoes,
      redes: [linkedin, ...redesSociais],
    };
    console.log(data);

    //cadastrar o currículo

    dispatch(setAlert(true, "Currículo cadastrado com sucesso."));
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setDadosPessoais({
      ...dadosPessoais,
      [name]: value,
    });
  };

  return (
    <TabPanel value={props.value} index={1}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h2" component="h1" gutterBottom>
          CURRÍCULO
        </Typography>
      </Top>
      <PaperStyled>
        <Form onSubmit={handleSubmit}>
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            DADOS PESSOAIS
          </Typography>

          <Line>
            <TextField
              margin="dense"
              name="nome"
              value={dadosPessoais.nome || ""}
              type="text"
              onChange={changeInput}
              fullWidth
              variant="outlined"
              placeholder="NOME COMPLETO"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
            <TextField
              margin="dense"
              name="telefone"
              value={dadosPessoais.telefone || ""}
              type="text"
              onChange={changeInput}
              fullWidth
              variant="outlined"
              placeholder="TELEFONE"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
          </Line>

          <Line>
            <TextField
              multiline
              rows={2}
              margin="dense"
              name="endereco"
              value={dadosPessoais.endereco || ""}
              type="text"
              onChange={changeInput}
              fullWidth
              variant="outlined"
              placeholder="ENDEREÇO"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
          </Line>

          <br />
          <br />
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            CARTA DE APRESENTAÇÃO
          </Typography>
          <br />
          <EditorInput editorState={carta} setEditorState={setCarta} />

          <br />
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            EXPERIÊNCIA PROFISSIONAL
          </Typography>
          <ExperienciaProfissional
            experiencias={experiencias}
            setExperiencias={setExperiencias}
          />

          <br />
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            FORMAÇÃO ACADÊMICA
          </Typography>
          <FormacaoAcademica
            formacoes={formacoes}
            setFormacoes={setFormacoes}
          />

          <br />
          <br />
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            REDES SOCIAIS
          </Typography>
          <br />
          <RedesSociais
            redesSociais={redesSociais}
            setRedesSociais={setRedesSociais}
            linkedin={linkedin}
            setLinkedin={setLinkedin}
          />

          <div id="button-wrapper">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              Cadastrar
            </Button>
          </div>
        </Form>
      </PaperStyled>
    </TabPanel>
  );
}
