import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { push } from "connected-react-router";

import { setAlert } from "../../../actions/alert";
import { tipos, areas, pdc, niveis, cargos } from "./constants";

import { Typography, Button, MenuItem, Tooltip } from "@material-ui/core";
import {
  Top,
  Line1,
  Line2,
  TextFieldStyled,
  ButtonsWraper,
  Form,
  ChipInputStyled,
} from "./styles";

import TabPanel from "../../../components/TabPanel";

import { routes } from "../../../utils";
import Breadcrumb from "../../../components/Breadcrumb";

export default function CriarVaga(props) {
  const dispatch = useDispatch();
  const { open, text } = useSelector((state) => state.alertReducer);
  console.log(open, text);

  const breadcrumbInfo = [
    {
      nome: "Home",
      rota: routes.home,
    },
    {
      nome: "Sou Recrutador",
      rota: routes.home,
      // TODO: Mudar essa rota quando tiver sou recrutador
    },
    {
      nome: "Criar vaga",
    },
  ];

  const [buttonActive, setButtonctive] = useState(false);

  const [input, setInput] = useState({
    titulo: "",
    tipo: "",
    area: "",
    nivel: "",
    cidade: "São Paulo",
    pcd: "",
    descricao: "",
    requisitos: "",
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
    console.log(input, chips);
    setInput({});
    setChips([]);
    dispatch(setAlert(true, "Vaga cadastrada com sucesso."));
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
      <Form onSubmit={handleSubmit}>
        <Line1>
          <TextFieldStyled
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
          <TextFieldStyled
            select
            // required
            name="tipo"
            value={input.tipo || ""}
            onChange={changeInput}
            variant="outlined"
            size="small"
            label="TIPO DE CONTRATAÇÃO"
            style={{
              width: "30%",
            }}
          >
            {tipos.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldStyled>
        </Line1>
        <Line2>
          <TextFieldStyled
            select
            // required
            name="area"
            value={input.area || ""}
            onChange={changeInput}
            variant="outlined"
            size="small"
            label="ÁREA"
            style={{
              width: "160%",
            }}
          >
            {areas.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldStyled>
          <TextFieldStyled
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
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldStyled>
          <TextFieldStyled
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
          <TextFieldStyled
            select
            // required
            name="pcd"
            value={input.pcd}
            onChange={changeInput}
            variant="outlined"
            size="small"
            label="PCD"
            style={{
              width: "30%",
            }}
          >
            {pdc.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldStyled>
        </Line2>
        <Line1>
          <TextFieldStyled
            select
            // required
            name="cargo"
            value={input.cargo || ""}
            onChange={changeInput}
            fullWidth
            variant="outlined"
            // size="small"
            label="CARGO"
          >
            {cargos.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldStyled>
          <ChipInputStyled
            placeholder="SINÔNIMOS"
            variant="outlined"
            value={chips}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip, index) => handleDeleteChip(chip, index)}
          />
        </Line1>
        <TextFieldStyled
          // required
          name="descricao"
          value={input.descricao || ""}
          onChange={changeInput}
          fullWidth
          variant="outlined"
          multiline
          rows={15}
          margin="normal"
          placeholder="DESCRITIVO DA VAGA"
          inputProps={{
            style: {
              textAlign: "center",
            },
          }}
        />
        <Typography>{input.descricao}</Typography>
        <TextFieldStyled
          // required
          name="requisitos"
          value={input.requisitos || ""}
          onChange={changeInput}
          fullWidth
          variant="outlined"
          multiline
          rows={10}
          margin="normal"
          placeholder="REQUISITOS E DIFERENCIAIS LGBTQ+"
          inputProps={{
            style: {
              textAlign: "center",
            },
          }}
        />
        <ButtonsWraper>
          <Button variant="contained" color="secondary" type="submit">
            SALVAR
          </Button>
          {/* {buttonActive && ( */}
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

          {/* )} */}
        </ButtonsWraper>
      </Form>
    </TabPanel>
  );
}
