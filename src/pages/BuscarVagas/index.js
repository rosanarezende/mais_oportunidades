import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllJobs } from "../../providers/jobs";

import { Typography, Snackbar } from "@material-ui/core";
import { Alert as MuiAlert } from "@material-ui/lab";
import { PageContent, Top } from "./styles";

import PageWrapper from "../../components/PageWrapper";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import DetalhesDaVaga from "./DetalhesDaVaga";
import Resultados from "./Resultados";
import Filtros from "./Filtros";

export default function BuscarVagas() {
  const dispatch = useDispatch();

  const { inputSearch } = useSelector((state) => state.search);
  const { jobs } = useSelector((state) => state.jobsReducer);

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
  const [vacancyIdSelected, setVacancyIdSelected] = useState("");
  const [buscar, setBuscar] = useState(false);
  const [pararBusca, setPararBusca] = useState(false);
  const [isPDC, setIsPDC] = useState(false);

  let result = [];

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

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

  const resultAll = result;
  if (isPDC) {
    result = result?.filter((job) => job.isForPCD === true);
  } else {
    result = resultAll;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setAlert({
      ...alert,
      open: false,
    });
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
            {result?.length > 0
              ? `${result.length} vagas encontradas`
              : result?.length === 1
              ? "1 vaga encontrada"
              : ""}
          </Typography>
        </Top>

        <PageContent>
          <Filtros
            setAlert={setAlert}
            setBuscar={setBuscar}
            setPararBusca={setPararBusca}
            input={input}
            setInput={setInput}
            isPDC={isPDC}
            setIsPDC={setIsPDC}
          />

          <Resultados
            result={result}
            input={input}
            inputSearch={inputSearch}
            setVacancyIdSelected={setVacancyIdSelected}
            setOpen={setOpen}
            setAlert={setAlert}
            setBuscar={setBuscar}
          />
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
