import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditorState } from "draft-js";

import { setAlert } from "../../../../actions/alert";

import {
  Typography,
  TextField,
  Button,
  // MenuItem,
  // Tooltip,
} from "@material-ui/core";
import {
  PaperStyled,
  Top,
  Form,
  Line,
  //ChipInputStyled
} from "./styles";

import TabPanel from "../../../../components/TabPanel";
import Breadcrumb from "../../../../components/Breadcrumb";
import EditorInput, {
  formatEditorOutput,
} from "../../../../components/EditorInput";
import ExperienciaProfissional from "./ExperienciaProfissional";
import FormacaoAcademica from "./FormacaoAcademica";

export default function Curriculo(props) {
  const dispatch = useDispatch();
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

  const [descricao, setDescricao] = useState(EditorState.createEmpty());
  const descricaoFormatada = formatEditorOutput(descricao);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(descricaoFormatada);

    //limpar campos
    // setInput({});
    setDescricao(EditorState.createEmpty());

    // informar criação da vaga
    dispatch(setAlert(true, "xxxx."));
  };

  const breadcrumbInfo = [
    {
      nome: "Home",
      rota: "/",
    },
    {
      nome: "Sou Candidato",
      rota: "/candidato",
      // TODO: Mudar essa rota quando tiver sou recrutador
    },
    {
      nome: "Currículo",
    },
  ];

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
              name="carta"
              // value={input.carta || ""}
              type="text"
              // onChange={changeInput}
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
              name="carta"
              // value={input.carta || ""}
              type="number"
              // onChange={changeInput}
              fullWidth
              variant="outlined"
              placeholder="IDADE"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
            <TextField
              margin="dense"
              name="carta"
              // value={input.carta || ""}
              type="text"
              // onChange={changeInput}
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
              name="carta"
              // value={input.carta || ""}
              type="text"
              // onChange={changeInput}
              fullWidth
              variant="outlined"
              placeholder="ENDEREÇO"
              // style={{
              //   width: "65%",
              // }}
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
            {/* <TextField
              multiline
              margin="dense"
              name="carta"
              // value={input.carta || ""}
              type="text"
              // onChange={changeInput}
              fullWidth
              variant="outlined"
              placeholder="xxx"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            /> */}
          </Line>

          <br />
          <br />
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            CARTA DE APRESENTAÇÃO
          </Typography>
          <br />

          <EditorInput
            editorState={descricao}
            setEditorState={setDescricao}
            // text=""
          />

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
          <br />
          <br />
          {/* <Typography variant="h3" component="h2" align="center" gutterBottom>
            OUTROS
          </Typography> */}

          <Line>
            <TextField
              margin="dense"
              name="carta"
              // value={input.carta || ""}
              type="text"
              // onChange={changeInput}
              fullWidth
              variant="outlined"
              placeholder="URL DO LINKEDIN"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
            <TextField
              margin="dense"
              name="carta"
              // value={input.carta || ""}
              type="number"
              // onChange={changeInput}
              fullWidth
              variant="outlined"
              placeholder="OUTRAS REDES"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
          </Line>
          <div id="button-wrapper">
            <Button color="primary" variant="outlined">
              Cadastrar
            </Button>
          </div>
        </Form>
      </PaperStyled>
    </TabPanel>
  );
}
