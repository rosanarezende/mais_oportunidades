import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setInputSearch } from "../../actions/search";
import { setLoading } from "../../actions/loading";
import { getAllJobs } from "../../providers/jobs";
import { getAllAreas } from "../../providers/area";

import image from "../../assets/image.jpg";

import {
  Typography,
  Button,
  TextField,
  MenuItem,
  Snackbar,
  Divider,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Pagination } from "@material-ui/lab";
import {
  PageContent,
  Top,
  FiltersWrapper,
  FiltersContent,
  FilterBox,
  ButtonsBox,
  ResultWrapper,
  ResultZero,
  VacancyWrapper,
  VacancyContent,
  Image,
  FactoryName,
  EmailWrapper,
  DetailButton,
  PaginationWrapper,
} from "./styles";
import PageWrapper from "../../components/PageWrapper";

import NavBar from "../../components/NavBar";
import DetalhesDaVaga from "./DetalhesDaVaga";
import Footer from "../../components/Footer";

export default function BuscarVagas() {
  const dispatch = useDispatch();
  const { inputSearch } = useSelector((state) => state.search);
  const { jobs } = useSelector((state) => state.jobsReducer);
  const { areas } = useSelector((state) => state.areaReducer);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const [input, setInput] = useState({
    cargo: "",
    empresa: "",
    area: "",
  });
  const [email, setEmail] = useState("");
  const [vacancyIdSelected, setVacancyIdSelected] = useState("");
  const [buscar, setBuscar] = useState(false);
  const [pararBusca, setPararBusca] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  let result = [];

  useEffect(() => {
    dispatch(getAllAreas())
      .then(dispatch(getAllJobs()))
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

  if (inputSearch !== "") {
    result = jobs?.filter((job) => {
      const roleInAPI = formatString(job?.role).includes(
        formatString(inputSearch)
      );
      const synonymInAPI = job.synonymsArray
        .map((synonym) =>
          formatString(synonym).includes(formatString(inputSearch))
        )
        .filter((result) => result === true)[0];
      const companyy = formatString(job?.factory.name).includes(
        formatString(inputSearch)
      );
      const areaa = formatString(job?.area.name).includes(
        formatString(inputSearch)
      );
      return roleInAPI || synonymInAPI || companyy || areaa;
    });
  } else {
    result = undefined;
  }

  if (buscar) {
    if (input.cargo !== "") {
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
    } else if (input.area !== "") {
      result = jobs?.filter((job) =>
        formatString(job?.area.name).includes(formatString(input.area))
      );
    }
  } else {
    if (
      result &&
      (inputSearch === "" || inputSearch === undefined || pararBusca)
    ) {
      result = undefined;
    }
  }

  const clickBuscar = () => {
    if (input.cargo === "" && input.empresa === "" && input.area === "") {
      setAlert({
        open: true,
        message: "Preencha um dos campos de busca para continuar!",
        severity: "warning",
      });
    } else {
      dispatch(setLoading(true))
      setTimeout(() => {
        setBuscar(true);
        dispatch(setLoading(false))
      }, 1000)
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({
      ...alert,
      open: false,
    });
  };

  const verDetalhes = (jobId) => {
    setVacancyIdSelected(jobId);
    setOpen(true);
  };

  const enviarEmail = () => {
    console.log(email);
    if (email === "") {
      setAlert({
        open: true,
        message: "Preencha um email válido para continuar!",
        severity: "warning",
      });
    } else {
      const assunto = "Palavra não encontrada na pesquisa";
      const termoPesquisado = inputSearch
        ? inputSearch
        : input.cargo
        ? input.cargo
        : input.empresa;
      const corpo = `Termo pesquisado: ${termoPesquisado} - Email do usuário: ${email}`;
      // ToDo: implementar aviso por email em produção
      window.open(
        `mailto:rezende_rosana@hotmail.com?subject=${assunto}&body=${corpo}`,
        "_self"
      );
      setEmail("");
      setBuscar(false);
      setAlert({
        open: true,
        message: "Email enviado com sucesso!",
        severity: "success",
      });
    }
  };

  return (
    <>
      <NavBar />
      <PageWrapper>
        <Top>
          <div>
            <Typography variant="body2" gutterBottom>
              Resultado para "busca"
            </Typography>
            <Typography variant="h4" component="h2">
              <strong>BUSCAR VAGAS</strong>
            </Typography>
          </div>
          <Typography variant="body1" gutterBottom>
            {result?.length > 0 && `${result.length} vagas encontradas`}
          </Typography>
        </Top>

        <PageContent>
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
                  onKeyDown={(e) => e.key === 'Enter' && clickBuscar()}
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
                  onKeyDown={(e) => e.key === 'Enter' && clickBuscar()}
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
                  onClick={clickBuscar}
                >
                  Buscar
                </Button>
              </ButtonsBox>
            </FiltersContent>
          </FiltersWrapper>

          {result === undefined ? (
            <ResultWrapper display="true">
              <Typography variant="h5" align="center">
                Preencha um dos campos e clique em <strong>BUSCAR</strong>.
              </Typography>
            </ResultWrapper>
          ) : result?.length === 0 ? (
            <ResultZero>
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
              <EmailWrapper>
                <TextField
                  color="primary"
                  variant="outlined"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e-mail"
                  margin="dense"
                  type="email"
                  required
                  fullWidth
                />
                <DetailButton
                  onClick={enviarEmail}
                  variant="contained"
                  color="primary"
                  type="button"
                  // size="large"
                >
                  Enviar
                </DetailButton>
              </EmailWrapper>
            </ResultZero>
          ) : (
            <ResultWrapper>
              {result
                ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map((job) => (
                  <VacancyWrapper key={job.id}>
                    <div>
                      <Image src={job.image ?? image} alt={job.factory.name} />
                      <VacancyContent>
                        <div>
                          <Typography variant="h6" component="h2">
                            {job.title?.toUpperCase()}
                          </Typography>
                          <FactoryName variant="body1">
                            {job.factory?.name?.toUpperCase()}
                          </FactoryName>
                          <Typography variant="body2">{job.address}</Typography>
                        </div>
                        <DetailButton
                          variant="contained"
                          color="primary"
                          onClick={() => verDetalhes(job?.id)}
                          gutterBottom
                        >
                          Ver detalhes
                        </DetailButton>
                      </VacancyContent>
                    </div>
                  </VacancyWrapper>
                ))}

              <Divider />
              <PaginationWrapper>
                <Pagination
                  count={Math.ceil(result.length / itemsPerPage)}
                  page={page}
                  onChange={(event, value) => setPage(value)}
                  defaultPage={1}
                  color="primary"
                  showFirstButton
                  showLastButton
                />
              </PaginationWrapper>
            </ResultWrapper>
          )}
        </PageContent>
        <DetalhesDaVaga
          open={open}
          setOpen={setOpen}
          vacancyIdSelected={vacancyIdSelected}
        />

        <Snackbar
          open={alert.open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity={alert.severity}
          >
            {alert.message}
          </MuiAlert>
        </Snackbar>
      </PageWrapper>
      <Footer />
    </>
  );
}
