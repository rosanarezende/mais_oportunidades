import { Close } from "@material-ui/icons";
import { TextField, Button } from "@material-ui/core";
import { Redes, Line, CloseIcon, AddExperience } from "./styles";

function RedesSociais(props) {
  const { redesSociais, setRedesSociais, linkedin, setLinkedin } = props;

  const addSocial = () => {
    setRedesSociais([...redesSociais, ""]);
  };

  const removeSocial = (position) => {
    var filtered = redesSociais.filter((value, index) => {
      return position !== index;
    });
    setRedesSociais(filtered);
  };

  const setSocialItemValue = (position, value) => {
    const updatedItems = redesSociais.map((item, index) => {
      return index === position ? value : item;
    });
    setRedesSociais(updatedItems);
  };

  return (
    <div>
      <Line>
        <TextField
          margin="dense"
          name="linkedin"
          value={linkedin || ""}
          type="text"
          onChange={(e) => setLinkedin(e.target.value)}
          fullWidth
          variant="outlined"
          placeholder="URL DO LINKEDIN"
          inputProps={{
            style: {
              textAlign: "center",
            },
          }}
        />
      </Line>
      {redesSociais?.map((item, index) => (
        <Redes key={index}>
          <TextField
            margin="dense"
            value={redesSociais[index] || ""}
            type="text"
            onChange={(e) => setSocialItemValue(index, e.target.value)}
            fullWidth
            variant="outlined"
            placeholder="URL"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
          />
          <CloseIcon onClick={() => removeSocial(index)}>
            <Close />
          </CloseIcon>
        </Redes>
      ))}
      <AddExperience>
        <Button color="primary" variant="outlined" onClick={addSocial}>
          + rede social
        </Button>
      </AddExperience>
    </div>
  );
}

export default RedesSociais;
