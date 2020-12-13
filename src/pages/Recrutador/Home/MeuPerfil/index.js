import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditorState } from "draft-js";

import { setAlert } from "../../../../actions/alert";

import { breadcrumbInfo, textFieldsContent } from "./constants";

import image from "../../../../assets/image.jpg";
import { Typography, TextField, Button, Tooltip } from "@material-ui/core";
import { Top, PaperStyled, Form } from "./styles";

import TabPanel from "../../../../components/TabPanel";
import Breadcrumb from "../../../../components/Breadcrumb";
import EditorInput, {
  formatEditorOutput,
} from "../../../../components/EditorInput";

export default function MeuPerfil(props) {
  const dispatch = useDispatch();
  const [buttonActive, setButtonctive] = useState(false);
  const [descricao, setDescricao] = useState(EditorState.createEmpty());
  const descricaoFormatada = formatEditorOutput(descricao);

  const [input, setInput] = useState({
    cnpj: "00.000.000/0000-00",
    empresa: "Empresa X",
    segmento: "",
    local: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(descricaoFormatada);

    // setDescricao(EditorState.createEmpty());
    // setInput({})

    dispatch(setAlert(true, "Perfil cadastrado com sucesso."));

    setButtonctive(true);
  };

  const publicarVaga = () => {
    dispatch(setAlert(true, "Perfil publicado com sucesso."));
  };

  return (
    <TabPanel value={props.value} index={2}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h5" gutterBottom>
          MEU PERFIL
        </Typography>
      </Top>

      <PaperStyled>
        <Form onSubmit={handleSubmit}>
          <div id="content-wrapper">
            <div id="img-wrapper">
              <img src={image} alt="logo empresa" />
            </div>
            <div id="inputs-wrapper">
              <div id="inputs">
                {textFieldsContent.map((item, index) => (
                  <TextField
                    // required
                    key={index}
                    className={item.className}
                    name={item.name}
                    value={input[item.name] || ""}
                    onChange={changeInput}
                    // fullWidth
                    variant="outlined"
                    size="small"
                    label={item.label}
                    disabled={item.disabled}
                    inputProps={{
                      style: {
                        textAlign: "center",
                      },
                    }}
                  />
                ))}
              </div>
              <EditorInput
                editorState={descricao}
                setEditorState={setDescricao}
                text="DESCRITIVO"
              />
            </div>
          </div>

          <div id="button-wrapper">
            <Button variant="contained" color="secondary" type="submit">
              SALVAR
            </Button>

            <Tooltip title="Salve o perfil antes de publicar">
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
