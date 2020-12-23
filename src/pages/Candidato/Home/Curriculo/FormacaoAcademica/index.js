import {
  Line,
  Experience,
  CloseIcon,
  AddExperience,
  Dates,
  Bottom,
} from "./styles";
import {
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

function FormacaoAcademica(props) {
  const { formacoes, setFormacoes } = props;

  const addExperience = () => {
    setFormacoes([
      ...formacoes,
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
  };

  const removeExperience = (position) => {
    var filtered = formacoes.filter((value, index) => {
      return position !== index;
    });
    setFormacoes(filtered);
  };

  const setExperienceItemValue = (position, field, value) => {
    const updatedItems = formacoes.map((item, index) => {
      if (index === position) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setFormacoes(updatedItems);
  };

  return (
    <>
      {formacoes?.map((item, index) => (
        <Experience key={index}>
          <CloseIcon onClick={() => removeExperience(index)}>
            <Close />
          </CloseIcon>
          <Line>
            <TextField
              margin="dense"
              name="curso"
              value={item?.curso || ""}
              type="text"
              onChange={(e) =>
                setExperienceItemValue(index, "curso", e.target.value)
              }
              fullWidth
              variant="outlined"
              placeholder="CURSO"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
            <TextField
              margin="dense"
              name="nivel"
              value={item?.nivel || ""}
              type="text"
              onChange={(e) =>
                setExperienceItemValue(index, "nivel", e.target.value)
              }
              fullWidth
              variant="outlined"
              placeholder="NÍVEL"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
            <TextField
              margin="dense"
              name="instituicao"
              value={item?.instituicao || ""}
              type="text"
              onChange={(e) =>
                setExperienceItemValue(index, "instituicao", e.target.value)
              }
              fullWidth
              variant="outlined"
              placeholder="INSTITUIÇÃO"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
          </Line>

          <Bottom>
            {/* <div id="inputs"> */}
            <TextField
              multiline
              rows={5}
              margin="dense"
              name="observacoes"
              value={item?.observacoes || ""}
              type="text"
              onChange={(e) =>
                setExperienceItemValue(index, "observacoes", e.target.value)
              }
              fullWidth
              variant="outlined"
              placeholder="OBSERVAÇÕES"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
            {/* </div> */}
            <div id="outros">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={item?.atual}
                    onChange={(e) =>
                      setExperienceItemValue(index, "atual", e.target.checked)
                    }
                    name="atual"
                    color="primary"
                  />
                }
                label="Estudo atualmente aqui"
              />

              <Dates>
                <div>
                  <Typography>Data de início</Typography>
                  <TextField
                    margin="dense"
                    name="inicio"
                    value={item?.inicio || ""}
                    type="date"
                    onChange={(e) =>
                      setExperienceItemValue(index, "inicio", e.target.value)
                    }
                    variant="outlined"
                    inputProps={{
                      style: {
                        textAlign: "center",
                      },
                    }}
                  />
                </div>
                {!item?.atual && (
                  <div>
                    <Typography>Data de término</Typography>
                    <TextField
                      margin="dense"
                      name="fim"
                      value={item?.fim || ""}
                      type="date"
                      onChange={(e) =>
                        setExperienceItemValue(index, "fim", e.target.value)
                      }
                      variant="outlined"
                      inputProps={{
                        style: {
                          textAlign: "center",
                        },
                      }}
                    />
                  </div>
                )}
              </Dates>
            </div>
          </Bottom>
        </Experience>
      ))}
      <AddExperience>
        <Button color="primary" variant="outlined" onClick={addExperience}>
          + formação
        </Button>
      </AddExperience>
    </>
  );
}

export default FormacaoAcademica;
