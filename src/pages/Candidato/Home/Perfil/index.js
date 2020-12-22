import { useState } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../../../../actions/alert";

import {
  dadosContent,
  enderecoContent,
  acessoContent,
  cepMask,
  removecepMask,
  getAdress,
} from "./constants";

import { Typography, TextField, Button } from "@material-ui/core";
import { PaperStyled, Top, Form } from "./styles";

import TabPanel from "../../../../components/TabPanel";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function PerfilCandidato(props) {
  const dispatch = useDispatch();

  // TODO: trazer alguns dados preenchidos
  const [input, setInput] = useState({
    nome: "Fulano de Tal",
    cpf: "123.456.789-10",
    nascimento: "",

    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",

    email: "email@email.com",
    senhaAtual: "",
    novaSenha: "",
    confirm: "",
  });

  const [hidenOldPassword, setHidenOldPassword] = useState(false);
  const [hidenPassword, setHidenPassword] = useState(false);
  const [hidenConfirm, setHidenConfirm] = useState(false);
  const acessoInputs = acessoContent(
    hidenOldPassword,
    setHidenOldPassword,
    hidenPassword,
    setHidenPassword,
    hidenConfirm,
    setHidenConfirm
  );
  const [errorCEP, setErrorCEP] = useState(false);
  const enderecoInputs = enderecoContent(errorCEP);

  const breadcrumbInfo = [
    { nome: "Home", rota: "/" },
    { nome: "Sou Candidato", rota: "/candidato" },
    { nome: "Cadastro" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAlert(true, "Cadastro atualizado com sucesso."));
  };

  const validateCep = (value) => {
    const cepNumbers = removecepMask(value);
    if (cepNumbers?.length === 8) {
      getAdress(cepNumbers).then((result) => {
        if (result.data.erro === undefined) {
          // console.log(result.data);
          const { logradouro, bairro, localidade, uf, cep } = result.data;
          setInput({
            ...input,
            cep,
            logradouro,
            bairro,
            cidade: localidade,
            estado: uf,
            // numero: "",
          });
        } else {
          dispatch(setAlert(true, "CEP não encontrado."));
          setInput({
            ...input,
            cep: "", // value,
            logradouro: "",
            numero: "",
            bairro: "",
            cidade: "",
            estado: "",
          });
        }
      });
      return true;
    } else {
      return false;
    }
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    if (name === "cep") {
      console.log(cepMask(value));
      setInput({ ...input, cep: cepMask(value) });
      if (!validateCep(value)) {
        setErrorCEP(true);
      } else {
        setErrorCEP(false);
      }
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  return (
    <TabPanel value={props.value} index={0}>
      <Top>
        <Breadcrumb breadcrumbInfo={breadcrumbInfo} />
        <Typography variant="h2" component="h1" gutterBottom>
          CADASTRO
        </Typography>
      </Top>
      <PaperStyled>
        <Form onSubmit={handleSubmit}>
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            DADOS PESSOAIS
          </Typography>
          <div>
            {dadosContent.map((item, index) => (
              <TextField
                key={index}
                required
                disabled={item.disabled}
                className={item.className}
                margin="dense"
                name={item.name}
                value={input[item.name] || ""}
                type={item.type}
                onChange={changeInput}
                variant="outlined"
                // placeholder={item.placeholder}
                label={item.label}
                InputLabelProps={{ shrink: item.shrink }}
                InputProps={{
                  endAdornment: item.endAdornment,
                  inputProps: {
                    pattern: item.pattern,
                    title: item.title,
                    style: {
                      textAlign: "center",
                    },
                  },
                }}
              />
            ))}
          </div>

          <Typography variant="h3" component="h2" align="center" gutterBottom>
            ENDEREÇO
          </Typography>
          <div>
            {enderecoInputs.map((item, index) => (
              <TextField
                key={index}
                required={item.required}
                disabled={item.disabled}
                className={item.className}
                margin="dense"
                name={item.name}
                value={input[item.name] || ""}
                type={item.type}
                onChange={changeInput}
                variant="outlined"
                // placeholder={item.placeholder}
                label={item.label}
                InputLabelProps={{ shrink: item.shrink }}
                InputProps={{
                  // endAdornment: item.endAdornment,
                  inputProps: {
                    pattern: item.pattern,
                    title: item.title,
                    style: {
                      textAlign: "center",
                    },
                  },
                }}
                error={item.error}
                helperText={item.helperText}
              />
            ))}
          </div>

          <Typography variant="h3" component="h2" align="center" gutterBottom>
            ACESSO
          </Typography>
          <div>
            {acessoInputs.map((item, index) => (
              <TextField
                key={index}
                required={item.required}
                disabled={item.disabled}
                className={item.className}
                margin="dense"
                name={item.name}
                value={input[item.name] || ""}
                type={item.type}
                onChange={changeInput}
                variant="outlined"
                // placeholder={item.placeholder}
                label={item.label}
                InputLabelProps={{ shrink: item.shrink }}
                InputProps={{
                  endAdornment: item.endAdornment,
                  inputProps: {
                    pattern: item.pattern,
                    title: item.title,
                    style: {
                      textAlign: "center",
                    },
                  },
                }}
              />
            ))}
          </div>

          <div id="button-wrapper">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              Cadastrar
            </Button>
          </div>
        </Form>
      </PaperStyled>
    </TabPanel>
  );
}
