import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setInputSearch } from "../../actions/search";

import image from "../../assets/image.jpg";

import { Typography, Button, TextField, MenuItem } from "@material-ui/core";
import {
  PageContent,
  FiltersWrapper,
  FiltersContent,
  FilterBox,
  ButtonsBox,
  ResultWrapper,
  VacancyWrapper,
  Image,
  VacancyContent,
} from "./styles";
import PageWrapper from "../../components/PageWrapper";

import NavBar from "../../components/NavBar";
import DetalhesDaVaga from "./DetalhesDaVaga";

const areas = [
  {
    value: "desenvolvimento",
    label: "Desenvolvimento de Software",
  },
  {
    value: "design",
    label: "Design",
  },
  {
    value: "juridico",
    label: "Jurídico",
  },
  {
    value: "produto",
    label: "Produto",
  },
];

const vemDaApi = [
  {
    id: 1,
    cargo: "Pessoa desenvolvedora web",
    empresa: "Empresa X",
    area: "desenvolvimento",
    image,
  },
  {
    id: 2,
    cargo: "Design",
    empresa: "Empresa Y",
    area: "design",
    image,
  },
  {
    id: 3,
    cargo: "Advogado(a)",
    empresa: "Empresa X",
    area: "juridico",
    image,
  },
];

export default function BuscarVagas() {
  const dispatch = useDispatch();

  const { inputSearch } = useSelector((state) => state.search);
  const [buscar, setBuscar] = useState(false);
  const [input, setInput] = useState({
    cargo: inputSearch ?? "",
    empresa: "",
    area: "",
  });

  const [vacancyIdSelected, setVacancyIdSelected] = useState("");
  const [open, setOpen] = useState(false);

  const buscarPorParam = (param) => {
    return vemDaApi?.filter((emprego) => {
      const inputFormatted = input[param]
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const cargoNaAPI = emprego[param]
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return cargoNaAPI?.includes(inputFormatted);
    });
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      cargo: "",
      empresa: "",
      area: "",
      [name]: value,
    });
    setBuscar(false);
  };

  let result = [];
  if (inputSearch && inputSearch !== "") {
    result = buscarPorParam("cargo");
  }
  if (buscar) {
    if (input.cargo !== "") {
      result = buscarPorParam("cargo");
    } else if (input.empresa !== "") {
      result = buscarPorParam("empresa");
    } else if (input.area !== "") {
      result = buscarPorParam("area");
    }
  }

  const verDetalhes = (empregoId) => {
    setVacancyIdSelected(empregoId);
    setOpen(true);
  };

  return (
    <>
      <NavBar />
      <PageWrapper>
        <PageContent>
          <FiltersWrapper>
            <FiltersContent>
              <FilterBox>
                <Typography variant="h6" component="h2" gutterBottom>
                  CARGO OU PALAVRA-CHAVE
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  name="cargo"
                  value={input.cargo || ""}
                  onChange={changeInput}
                  onClick={() => dispatch(setInputSearch(""))}
                />
              </FilterBox>
              <FilterBox>
                <Typography variant="h6" component="h2" gutterBottom>
                  EMPRESA
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  name="empresa"
                  value={input.empresa || ""}
                  onChange={changeInput}
                />
              </FilterBox>
              <FilterBox>
                <Typography variant="h6" component="h2" gutterBottom>
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
                >
                  {areas.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FilterBox>

              <ButtonsBox>
                {/* O que esse botão faz? */}
                <Button variant="outlined" color="secondary">
                  Voltar
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setBuscar(true)}
                >
                  Buscar
                </Button>
              </ButtonsBox>
            </FiltersContent>
          </FiltersWrapper>

          {result.length === 0 ? (
            <div>
              <Typography variant="body1">
                Tempor tempor pariatur eu deserunt ullamco. Magna qui ullamco
                tempor aute.
              </Typography>
            </div>
          ) : (
            <div>
              <Typography variant="h6" gutterBottom>
                Lorem Ipsun
              </Typography>
              <Typography variant="body1">
                Tempor tempor pariatur eu deserunt ullamco. Magna qui ullamco
                tempor aute.
              </Typography>
              <ResultWrapper>
                {result?.map((emprego) => (
                  <VacancyWrapper key={emprego.cargo}>
                    <Image src={emprego.image} alt={emprego.empresa} />
                    <VacancyContent>
                      <Typography variant="h6" component="h2">
                        {emprego.empresa}
                      </Typography>
                      <Typography gutterBottom>{emprego.cargo}</Typography>
                    </VacancyContent>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => verDetalhes(emprego.id)}
                    >
                      Ver detalhes
                    </Button>
                  </VacancyWrapper>
                ))}
              </ResultWrapper>
            </div>
          )}
        </PageContent>
        <DetalhesDaVaga
          open={open}
          setOpen={setOpen}
          vacancyIdSelected={vacancyIdSelected}
        />
      </PageWrapper>
    </>
  );
}
