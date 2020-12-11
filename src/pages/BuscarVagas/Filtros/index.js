import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setInputSearch } from "../../../actions/search";
import { setLoading } from "../../../actions/loading";

import { getAllAreas } from "../../../providers/area";
import { getAllFactories } from "../../../providers/factory";

import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  Typography,
  Button,
  TextField,
  MenuItem,
  Grid,
  Switch,
} from "@material-ui/core";
import {
  FiltersWrapper,
  FiltersContent,
  FilterBox,
  ButtonsBox,
} from "./styles";

function Filtros(props) {
  const dispatch = useDispatch();
  const {
    input,
    setInput,
    setBuscar,
    setPararBusca,
    setAlert,
    isPDC,
    setIsPDC,
  } = props;
  const { areas } = useSelector((state) => state.areaReducer);
  const { factories } = useSelector((state) => state.factoryReducer);
  const factoriesOrdered = factories?.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  useEffect(() => {
    dispatch(getAllAreas());
    dispatch(getAllFactories());
  }, [dispatch]);

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

  const changeFactory = (value) => {
    setBuscar(false);
    setPararBusca(true);
    setInput({
      cargo: "",
      area: "",
      empresa: value,
    });
  };

  const cleanSearch = () => {
    setInput({
      cargo: "",
      empresa: "",
      area: "",
    });
    setBuscar(false);
    setIsPDC(false);
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
          <Autocomplete
            freeSolo
            options={factoriesOrdered}
            getOptionLabel={(option) => option.name}
            inputValue={input.empresa || ""}
            onInputChange={(e, newInputValue) => changeFactory(newInputValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                fullWidth
                size="small"
                onClick={() => dispatch(setInputSearch(undefined))}
                onKeyDown={(e) => e.key === "Enter" && clickBuscar()}
              />
            )}
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
        <FilterBox>
          <Typography variant="h6" component="h3" gutterBottom>
            ACEITA PDC
          </Typography>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              {/* <Grid item>Não</Grid> */}
              <Grid item>
                <Switch
                  checked={isPDC}
                  onChange={() => setIsPDC(!isPDC)}
                  name="checkedC"
                />
              </Grid>
              <Grid item>Sim</Grid>
            </Grid>
          </Typography>
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
