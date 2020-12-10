import { useState } from "react";

import image from "../../../assets/image.jpg";

import { Typography, TextField, Divider } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import {
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

function Resultados(props) {
  const {
    result,
    input,
    inputSearch,
    setVacancyIdSelected,
    setOpen,
    setAlert,
    setBuscar,
  } = props;
  const [email, setEmail] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

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

  return result === undefined ? (
    <ResultWrapper display="true">
      <Typography variant="h5" align="center">
        Preencha um dos campos e clique em <strong>BUSCAR</strong>.
      </Typography>
    </ResultWrapper>
  ) : result?.length === 0 ? (
    <ResultZero>
      <Typography align="center" variant="h6" component="h6" gutterBottom>
        Nenhuma vaga encontrada :(
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Sentimos muito, não foi possível encontrar vagas com o termo buscado.
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Deixe seu e-mail abaixo que assim que tivermos uma vaga publicada de
        acordo com a sua pesquisa, você será notificado.
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
                    {job.role?.toUpperCase()}
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
  );
}

export default Resultados;
