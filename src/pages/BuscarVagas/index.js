import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setInputSearch } from "../../actions/search";
import { getAllJobs } from "../../providers/jobs";

import image from "../../assets/image.jpg";

import {
  Typography,
  Button,
  TextField,
  // MenuItem
} from "@material-ui/core";
import {
  PageContent,
  Top,
  FiltersWrapper,
  FiltersContent,
  FilterBox,
  ButtonsBox,
  ResultWrapper,
  VacancyWrapper,
  VacancyContent,
  Image,
  FactoryName,
  EmailWrapper
} from "./styles";
import PageWrapper from "../../components/PageWrapper";

import NavBar from "../../components/NavBar";
import DetalhesDaVaga from "./DetalhesDaVaga";
import Footer from "../../components/Footer";

// const areas = [
//   {
//     value: "desenvolvimento",
//     label: "Desenvolvimento de Software",
//   },
//   {
//     value: "design",
//     label: "Design",
//   },
//   {
//     value: "juridico",
//     label: "Jurídico",
//   },
//   {
//     value: "produto",
//     label: "Produto",
//   },
// ];

export default function BuscarVagas() {
  const dispatch = useDispatch();

  const { inputSearch } = useSelector((state) => state.search);
  const [buscar, setBuscar] = useState(false);
  const [input, setInput] = useState({
    cargo: "", // inputSearch ?? ""
    empresa: "",
    area: "",
  });
  const [email, setEmail] = useState("");

  const [vacancyIdSelected, setVacancyIdSelected] = useState("");
  const [open, setOpen] = useState(false);

  const { jobs } = useSelector((state) => state.jobsReducer);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

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

  const cleanSearch = () => {
    setInput({
      cargo: "",
      empresa: "",
      area: "",
    });
    setBuscar(false);
  };

  const formatString = (name) => {
    return name
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  let result = [];

  if (inputSearch !== undefined && inputSearch !== "") {
    result = jobs?.filter((job) => {
      const roleInAPI = formatString(job?.role).includes(
        formatString(inputSearch)
      );
      const synonymInAPI = job.synonymsArray
        .map((synonym) =>
          formatString(synonym).includes(formatString(inputSearch))
        )
        .filter((result) => result === true)[0];
      return roleInAPI || synonymInAPI;
    });
  }

  if (buscar) {
    if (input.cargo !== "") {
      // result = jobs?.filter(job => formatString(job?.role).includes(formatString(input.cargo)));
      result = jobs?.filter((job) => {
        const roleInAPI = formatString(job?.role).includes(
          formatString(input.cargo)
        );
        const synonymInAPI = job.synonymsArray
          .map((synonym) =>
            formatString(synonym).includes(formatString(input.cargo))
          )
          .filter((result) => result === true)[0];
        return roleInAPI || synonymInAPI;
      });
    } else if (input.empresa !== "") {
      result = jobs?.filter((job) =>
        formatString(job?.factory.name).includes(formatString(input.empresa))
      );
    }
    // else if (input.area !== "") {
    //   result = jobs?.filter(job => formatString(job?.area).includes(formatString(input.area)));
    // }
  }

  const verDetalhes = (jobId) => {
    setVacancyIdSelected(jobId);
    setOpen(true);
  };

  const enviarEmail = () => {
    console.log(email);;;
  };;;

  return (
    <>
      <NavBar />
      <PageWrapper>
        <Top>
          <Typography variant="body2" gutterBottom>
            Resultado para "busca"
          </Typography>
          <Typography variant="h4" component="h2">
            <strong>BUSCAR VAGAS</strong>
          </Typography>
        </Top>
        <PageContent>
          <FiltersWrapper>
            <FiltersContent>
              <FilterBox>
                <Typography variant="h6" component="h3" gutterBottom>
                  CARGO OU PALAVRA-CHAVE
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  name="cargo"
                  value={input.cargo || ""}
                  onChange={changeInput}
                  onClick={() => dispatch(setInputSearch(undefined))}
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
                />
              </FilterBox>
              {/* <FilterBox>
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
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FilterBox> */}

              <ButtonsBox>
                {/* O que esse botão faz? */}
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={cleanSearch}
                >
                  LIMPAR
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
            <ResultWrapper>
              <Typography
                align="center"
                variant="h6"
                component="h6"
                gutterBottom
              >
                Nenhuma vaga encontrada :(
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Sentimos muito, não foi possível encontrar vagas com o termo
                buscado.
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Deixe seu e-mail abaixo que assim que tivermos uma vaga
                publicada de acordo com a sua pesquisa, você será notificado.
              </Typography>
              <EmailWrapper onClick={enviarEmail}>
                <TextField
                  color="primary"
                  variant="outlined"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e-mail"
                  margin="dense"
                  type="email"
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Enviar
                </Button>
              </EmailWrapper>
            </ResultWrapper>
          ) : (
            <ResultWrapper>
              {result?.map((job) => (
                <VacancyWrapper key={job.id}>
                  <Image src={job.image ?? image} alt={job.factory.name} />
                  <VacancyContent>
                    <Typography variant="h6" component="h2">
                      {job.title?.toUpperCase()}
                    </Typography>
                    <FactoryName variant="body1">
                      {job.factory?.name?.toUpperCase()}
                    </FactoryName>
                    <Typography variant="body2">{job.address}</Typography>
                  </VacancyContent>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => verDetalhes(job.id)}
                  >
                    Ver detalhes
                  </Button>
                </VacancyWrapper>
              ))}
            </ResultWrapper>
          )}
        </PageContent>
        <DetalhesDaVaga
          open={open}
          setOpen={setOpen}
          vacancyIdSelected={vacancyIdSelected}
        />
      </PageWrapper>
      <Footer />
    </>
  );
}
