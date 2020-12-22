import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setAlert } from "../../../../actions/alert";
import { getAllSegments, createSegment } from "../../../../providers/segment";
import { editFactory } from "../../../../providers/factory";

import { breadcrumbInfo, textFieldsContent } from "./constants";

import image from "../../../../assets/image.jpg";
import { Typography, TextField, Button } from "@material-ui/core";
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
  const {
    factoryId,
    perfil,
    setPerfil,
    perfilDescricao,
    setPerfilDescricao,
    segmentId,
    setSegmentId,
  } = props;
  const { empresa, cnpj, localizacao, publicada, segmento } = perfil;
  const { segments, segmentCreated } = useSelector((s) => s.segmentReducer);
  const cnpjFormatado = Number(cnpj?.replace(/[./-]/g, ""));
  const descricaoFormatada = formatEditorOutput(perfilDescricao);

  const data = {
    name: empresa,
    cnpj: cnpjFormatado,
    description: descricaoFormatada,
    address: localizacao,
    isActive: publicada,
    segment_id: segmento?.id,
  };

  useEffect(() => {
    dispatch(getAllSegments());
  }, [dispatch]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      ...data,
      isActive: publicada,
      segment_id: segmentId,
    };
    dispatch(editFactory(factoryId, newData)).then(() =>
      dispatch(setAlert(true, "Perfil atualizado com sucesso."))
    );
  };

  const publicarPerfil = () => {
    setPerfil({ ...perfil, publicada: true });
    const newData = {
      ...data,
      isActive: true,
      segment_id: segmentId,
    };
    dispatch(editFactory(factoryId, newData)).then(() =>
      dispatch(setAlert(true, "Perfil publicado com sucesso."))
    );
  };

  const despublicarPerfil = () => {
    setPerfil({ ...perfil, publicada: false });
    const newData = {
      ...data,
      isActive: false,
      segment_id: segmentId,
    };
    dispatch(editFactory(factoryId, newData)).then(() =>
      dispatch(setAlert(true, "Perfil despublicado com sucesso."))
    );
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
        <Form>
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
                  className="cinquenta"
                  id="autocomplete"
                  value={perfil.segmento}
                  onChange={(e, newValue) => {
                    if (typeof newValue === "string") {
                      setPerfil({ ...perfil, segmento: newValue });
                      dispatch(createSegment(newValue));
                      // console.log("enter", segmentCreated?.id);
                      setSegmentId(segmentCreated?.id + 1);
                    } else if (newValue && newValue.inputValue) {
                      setPerfil({ ...perfil, segmento: newValue.inputValue });
                      dispatch(createSegment(newValue.inputValue));
                      // console.log("add",      segmentCreated?.id);
                      setSegmentId(segmentCreated?.id + 1);
                    } else {
                      setPerfil({ ...perfil, segmento: newValue?.name });
                      // console.log(newValue?.id);
                      setSegmentId(newValue?.id);
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
                editorState={perfilDescricao}
                setEditorState={setPerfilDescricao}
                text="DESCRITIVO"
              />
            </div>
          </div>

          <div id="button-wrapper">
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="secondary"
              type="button"
            >
              SALVAR
            </Button>
            {perfil.publicada ? (
              <Button
                variant="contained"
                color="primary"
                onClick={despublicarPerfil}
              >
                DESPUBLICAR
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={publicarPerfil}
              >
                PUBLICAR
              </Button>
            )}
          </div>
        </Form>
      </PaperStyled>
    </TabPanel>
  );
}
