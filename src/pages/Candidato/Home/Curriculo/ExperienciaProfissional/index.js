import { Line, Experience, CloseIcon, AddExperience, Dates } from "./styles";
import {
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

function ExperienciaProfissional(props) {
  const { experiencias, setExperiencias } = props;

  const addExperience = () => {
    setExperiencias([
      ...experiencias,
      {
        empresa: "",
        cargo: "",
        descricao: "",
        atual: false,
        inicio: "",
        fim: "",
      },
    ]);
  };

  const removeExperience = (position) => {
    // experiencias.splice(position, 1);
    var filtered = experiencias.filter((value, index) => {
      return position !== index;
    });
    setExperiencias(filtered);
  };

  const setExperienceItemValue = (position, field, value) => {
    const updatedItems = experiencias.map((experiencia, index) => {
      if (index === position) {
        return { ...experiencia, [field]: value };
      }
      return experiencia;
    });
    setExperiencias(updatedItems);
  };

  return (
    <>
      {experiencias?.map((experiencia, index) => (
        <Experience key={index}>
          <CloseIcon onClick={() => removeExperience(index)}>
            <Close />
          </CloseIcon>
          <div id="inputs">
            <Line>
              <TextField
                margin="dense"
                name="empresa"
                value={experiencia?.empresa || ""}
                type="text"
                onChange={(e) =>
                  setExperienceItemValue(index, "empresa", e.target.value)
                }
                fullWidth
                variant="outlined"
                placeholder="EMPRESA"
                inputProps={{
                  style: {
                    textAlign: "center",
                  },
                }}
              />
              <TextField
                margin="dense"
                name="cargo"
                value={experiencia?.cargo || ""}
                type="text"
                onChange={(e) =>
                  setExperienceItemValue(index, "cargo", e.target.value)
                }
                fullWidth
                variant="outlined"
                placeholder="CARGO"
                inputProps={{
                  style: {
                    textAlign: "center",
                  },
                }}
              />
            </Line>
            <TextField
              multiline
              rows={4}
              margin="dense"
              name="descricao"
              value={experiencia?.descricao || ""}
              type="text"
              onChange={(e) =>
                setExperienceItemValue(index, "descricao", e.target.value)
              }
              fullWidth
              variant="outlined"
              placeholder="DESCRIÇÃO"
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
          </div>
          <div id="outros">
            <FormControlLabel
              control={
                <Checkbox
                  checked={experiencia?.atual}
                  onChange={(e) =>
                    setExperienceItemValue(index, "atual", e.target.checked)
                  }
                  name="atual"
                  color="primary"
                />
              }
              label="Trabalho atualmente aqui"
            />

            <Dates>
              <div>
                <Typography>Data de início</Typography>
                <TextField
                  margin="dense"
                  name="inicio"
                  value={experiencia?.inicio || ""}
                  type="date"
                  onChange={(e) =>
                    setExperienceItemValue(index, "inicio", e.target.value)
                  }
                  // fullWidth
                  variant="outlined"
                  // placeholder="CARGO"
                  inputProps={{
                    style: {
                      textAlign: "center",
                    },
                  }}
                />
              </div>
              {!experiencia?.atual && (
                <div>
                  <Typography>Data de término</Typography>
                  <TextField
                    margin="dense"
                    name="fim"
                    value={experiencia?.fim || ""}
                    type="date"
                    onChange={(e) =>
                      setExperienceItemValue(index, "fim", e.target.value)
                    }
                    // fullWidth
                    variant="outlined"
                    // placeholder="CARGO"
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
        </Experience>
      ))}
      <AddExperience>
        <Button color="primary" variant="outlined" onClick={addExperience}>
          + experiência
        </Button>
      </AddExperience>
    </>
  );
}

export default ExperienciaProfissional;
