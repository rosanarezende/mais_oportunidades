import { useSelector, useDispatch } from "react-redux";

import { setInputSearch } from "../../../actions/search";
import { setLoading } from "../../../actions/loading";

import { Typography, Button, TextField, MenuItem } from "@material-ui/core";
import {
  FiltersWrapper,
  FiltersContent,
  FilterBox,
  ButtonsBox,
} from "./styles";

function Filtros(props) {
  const dispatch = useDispatch();
  const { input, setInput, setBuscar, setPararBusca, setAlert } = props;
  const { areas } = useSelector((state) => state.areaReducer);

  const changeInput = (e) => {
    setBuscar(false);
    setPararBusca(true);
    const { name, value } = e.target;
    setInput({
      cargo: "",
      empresa: "",
      area: "",
      [name]: value,
    });
  };

  const cleanSearch = () => {
    setInput({
      cargo: "",
      empresa: "",
      area: "",
    });
    setBuscar(false);
  };

  const clickBuscar = () => {
    if (input.cargo === "" && input.empresa === "" && input.area === "") {
      setAlert({
        open: true,
        message: "Preencha um dos campos de busca para continuar!",
        severity: "warning",
      });
    } else {
      dispatch(setLoading(true));
      setTimeout(() => {
        setBuscar(true);
        dispatch(setLoading(false));
      }, 1000);
    }
  };

  return (
    <FiltersWrapper>
      <FiltersContent>
        <FilterBox>
          <Typography variant="h6" component="h3" gutterBottom>
            CARGO
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            size="small"
            name="cargo"
            value={input.cargo || ""}
            onChange={changeInput}
            onClick={() => dispatch(setInputSearch(undefined))}
            onKeyDown={(e) => e.key === "Enter" && clickBuscar()}
          />
        </FilterBox>
        <FilterBox>
          <Typography variant="h6" component="h3" gutterBottom>
            EMPRESA
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            size="small"
            name="empresa"
            value={input.empresa || ""}
            onChange={changeInput}
            onClick={() => dispatch(setInputSearch(undefined))}
            onKeyDown={(e) => e.key === "Enter" && clickBuscar()}
          />
        </FilterBox>
        <FilterBox>
          <Typography variant="h6" component="h3" gutterBottom>
            ÁREA PROFISSIONAL
          </Typography>
          <TextField
            select
            variant="outlined"
            fullWidth
            size="small"
            name="area"
            value={input.area || ""}
            onChange={changeInput}
            onClick={() => dispatch(setInputSearch(undefined))}
          >
            {areas.map((option) => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </FilterBox>

        <ButtonsBox>
          <Button variant="outlined" color="secondary" onClick={cleanSearch}>
            LIMPAR
          </Button>

          <Button variant="outlined" color="primary" onClick={clickBuscar}>
            Buscar
          </Button>
        </ButtonsBox>
      </FiltersContent>
    </FiltersWrapper>
  );
}

export default Filtros;
