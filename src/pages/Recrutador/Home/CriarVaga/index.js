import { useState } from "react";
import { useDispatch } from "react-redux";
// import { push } from "connected-react-router";
import { EditorState } from "draft-js";

import { setAlert } from "../../../../actions/alert";

import { breadcrumbInfo, tipos, areas, pdc, niveis, cargos } from "./constants";

import {
  Typography,
  Button,
  MenuItem,
  Tooltip,
  TextField,
} from "@material-ui/core";
import { PaperStyled, Top, Line, Form, ChipInputStyled } from "./styles";

import TabPanel from "../../../../components/TabPanel";
import Breadcrumb from "../../../../components/Breadcrumb";
import EditorInput, {
  formatEditorOutput,
} from "../../../../components/EditorInput";

export default function CriarVaga(props) {
  const dispatch = useDispatch();
  const [buttonActive, setButtonctive] = useState(false);
  const [descricao, setDescricao] = useState(EditorState.createEmpty());
  const descricaoFormatada = formatEditorOutput(descricao);
  const [requisitos, setRequisitos] = useState(EditorState.createEmpty());
  const requisitosFormatado = formatEditorOutput(requisitos);

  const [input, setInput] = useState({
    titulo: "",
    tipo: "",
    area: "",
    nivel: "",
    cidade: "São Paulo",
    pcd: "",
    cargo: "",
  });

  const [chips, setChips] = useState([]);

  const handleAddChip = (chip) => {
    const newChips = [...chips, chip];
    setChips(newChips);
  };

  const handleDeleteChip = (chip, index) => {
    const newChips = chips.filter((thisChip) => thisChip !== chip);
    setChips(newChips);
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(input, chips, descricaoFormatada, requisitosFormatado);

    //limpar campos
    setInput({});
    setChips([]);
    setDescricao(EditorState.createEmpty());
    setRequisitos(EditorState.createEmpty());

    // informar criação da vaga
    dispatch(setAlert(true, "Vaga cadastrada com sucesso."));

    // liberar publicação
    setButtonctive(true);
  };

  const publicarVaga = () => {
    // alert("vaga publicada com sucesso");
    dispatch(setAlert(true, "Vaga publicada com sucesso."));
  };
  return (
    <TabPanel value={props.value} index={0}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h5" gutterBottom>
          CRIAR VAGA
        </Typography>
      </Top>
      <PaperStyled>
        <Form onSubmit={handleSubmit}>
          <Line>
            <TextField
              // required
              name="titulo"
              value={input.titulo || ""}
              onChange={changeInput}
              fullWidth
              variant="outlined"
              size="small"
              placeholder="TÍTULO DA VAGA *"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />

            <TextField
              select
              // required
              name="tipo"
              value={input.tipo || ""}
              onChange={changeInput}
              variant="outlined"
              size="small"
              label="TIPO DE CONTRATAÇÃO"
              fullWidth
            >
              {tipos.map((option) => (
                <MenuItem
                  style={{
                    justifyContent: "center",
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Line>

          <Line>
            <TextField
              select
              // required
              name="area"
              value={input.area || ""}
              onChange={changeInput}
              variant="outlined"
              size="small"
              label="ÁREA"
              fullWidth
              // style={{
              //   width: "160%",
              // }}
            >
              {areas.map((option) => (
                <MenuItem
                  style={{
                    justifyContent: "center",
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              // required
              name="nivel"
              value={input.nivel || ""}
              onChange={changeInput}
              fullWidth
              variant="outlined"
              size="small"
              label="NÍVEL"
            >
              {niveis.map((option) => (
                <MenuItem
                  style={{
                    justifyContent: "center",
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              // required
              name="cidade"
              value={input.cidade || ""}
              onChange={changeInput}
              fullWidth
              variant="outlined"
              size="small"
              placeholder="CIDADE *"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />

            <TextField
              select
              // required
              id="pdc"
              name="pcd"
              value={input.pcd}
              onChange={changeInput}
              variant="outlined"
              size="small"
              label="PCD"
              fullWidth
            >
              {pdc.map((option) => (
                <MenuItem
                  style={{
                    justifyContent: "center",
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Line>

          <Line>
            <TextField
              select
              // required
              name="cargo"
              value={input.cargo || ""}
              onChange={changeInput}
              fullWidth
              variant="outlined"
              label="CARGO"
            >
              {cargos.map((option) => (
                <MenuItem
                  style={{
                    justifyContent: "center",
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <ChipInputStyled
              fullWidth
              size="small"
              placeholder="SINÔNIMOS"
              variant="outlined"
              value={chips}
              onAdd={(chip) => handleAddChip(chip)}
              onDelete={(chip, index) => handleDeleteChip(chip, index)}
            />
          </Line>

          <EditorInput
            editorState={descricao}
            setEditorState={setDescricao}
            text="DESCRITIVO DA VAGA"
          />

          <EditorInput
            editorState={requisitos}
            setEditorState={setRequisitos}
            text="REQUISITOS E DIFERENCIAIS LGBTQ+"
          />

          <div id="button-wrapper">
            <Button variant="contained" color="secondary" type="submit">
              SALVAR
            </Button>

            <Tooltip title="Salve a vaga antes de publicar">
              <span>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={publicarVaga}
                  disabled={!buttonActive}
                >
                  PUBLICAR
                </Button>
              </span>
            </Tooltip>
          </div>
        </Form>
      </PaperStyled>
    </TabPanel>
  );
}
