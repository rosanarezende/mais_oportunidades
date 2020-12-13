import { useState } from "react";
import { useDispatch } from "react-redux";
// import { push } from "connected-react-router";
import { EditorState } from "draft-js";

import { setAlert } from "../../../../actions/alert";

import { breadcrumbInfo, textFieldsContent } from "./constants";

import {
  Typography,
  Button,
  MenuItem,
  Tooltip,
  TextField,
} from "@material-ui/core";
import { PaperStyled, Top, Form, ChipInputStyled } from "./styles";

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
          <div id="inputs">
            {textFieldsContent.map((item, index) => (
              <TextField
                key={index}
                className={item.className}
                select={item.select}
                // required={item.required}
                // type={item.tipo}
                name={item.name}
                value={input[item.name] || ""}
                onChange={changeInput}
                variant="outlined"
                size="small"
                label={item.label}
              >
                {item.select &&
                  item.data.map((option) => (
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
            ))}

            <ChipInputStyled
              className="sessenta"
              size="small"
              placeholder="SINÔNIMOS"
              variant="outlined"
              value={chips}
              onAdd={(chip) => handleAddChip(chip)}
              onDelete={(chip, index) => handleDeleteChip(chip, index)}
            />
          </div>

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
