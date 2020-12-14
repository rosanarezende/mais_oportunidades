import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditorState } from "draft-js";

import { setAlert } from "../../../../actions/alert";
import { getAllSegments, createSegment } from "../../../../providers/segment";

import { breadcrumbInfo, textFieldsContent } from "./constants";

import image from "../../../../assets/image.jpg";
import { Typography, TextField, Button, Tooltip } from "@material-ui/core";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { Top, PaperStyled, Form } from "./styles";

import TabPanel from "../../../../components/TabPanel";
import Breadcrumb from "../../../../components/Breadcrumb";
import EditorInput, {
  formatEditorOutput,
} from "../../../../components/EditorInput";

const filter = createFilterOptions();

export default function MeuPerfil(props) {
  const dispatch = useDispatch();

  const [buttonActive, setButtonctive] = useState(false);
  const [descricao, setDescricao] = useState(EditorState.createEmpty());
  const descricaoFormatada = formatEditorOutput(descricao);

  const [perfil, setPerfil] = useState({
    cnpj: "00.000.000/0000-00",
    empresa: "Empresa X",
    local: "",
  });
  const [value, setValue] = useState(null);

  const { segments } = useSelector((state) => state.segmentReducer);

  useEffect(() => {
    dispatch(getAllSegments());
  }, [dispatch]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(perfil, value, descricaoFormatada);

    // setDescricao(EditorState.createEmpty());
    // setPerfil({})

    dispatch(setAlert(true, "Perfil cadastrado com sucesso."));

    setButtonctive(true);
  };

  const publicarVaga = () => {
    dispatch(setAlert(true, "Perfil publicado com sucesso."));
  };

  return (
    <TabPanel value={props.value} index={props.index}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h5" gutterBottom>
          MEU PERFIL
        </Typography>
      </Top>

      <PaperStyled>
        <Form > 
          {/* onSubmit={handleSubmit} */}
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
                    value={perfil[item.name] || ""}
                    onChange={changeInput}
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

                <Autocomplete
                  className="quarenta"
                  id="autocomplete"
                  value={value}
                  onChange={(event, newValue) => {
                    if (typeof newValue === "string") {
                      setValue({
                        name: newValue,
                      });
                      dispatch(createSegment(newValue))
                    } else if (newValue && newValue.inputValue) {
                      setValue({
                        name: newValue.inputValue,
                      });
                      dispatch(createSegment(newValue.inputValue))
                    } else {
                      setValue(newValue);
                    }
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    if (params.inputValue !== "") {
                      filtered.push({
                        inputValue: params.inputValue,
                        name: `Add "${params.inputValue}"`,
                      });
                    }
                    return filtered;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  options={segments}
                  getOptionLabel={(option) => {
                    if (typeof option === "string") {
                      return option;
                    }
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    return option.name;
                  }}
                  renderOption={(option) => option.name}
                  freeSolo
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="SEGMENTO"
                      placeholder="Escolha ou crie um segmento"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </div>
              
              <EditorInput
                editorState={descricao}
                setEditorState={setDescricao}
                text="DESCRITIVO"
              />
            </div>
          </div>

          <div id="button-wrapper">
            <Button onClick={handleSubmit} variant="contained" color="secondary" type="button">
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
