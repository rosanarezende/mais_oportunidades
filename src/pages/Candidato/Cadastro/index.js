import { useState } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../../../actions/alert";

import { textFieldsContent } from "./constants";

import { Button, TextField, Typography } from "@material-ui/core";
import { PageContent, PaperStyled } from "./styles";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

function CadastroCandidato() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    confirmacao: "",
  });

  const [hidenPassword, setHidenPassword] = useState(false);
  const [hidenConfirm, setHidenConfirm] = useState(false);
  const [errorCPF, setErrorCPF] = useState(false);
  const textFields = textFieldsContent(
    hidenPassword,
    setHidenPassword,
    hidenConfirm,
    setHidenConfirm,
    errorCPF
  );

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const removeCpfMask = (value) => {
    // value.replace(/[^d]/g, '');
    return value.replace(".", "").replace(".", "").replace("-", "");
  };

  const validateCPF = (cpf) => {
    if(cpf.length > 12) {
      const cpfNumbers = removeCpfMask(cpf);
      
      //validar quantidade de caracteres
      if (cpfNumbers?.length !== 11) {
        return false;
      }
      else {
        const digitos = cpfNumbers.substring(9)
        
        //validar primeiro dígito
        let numeros = cpfNumbers.substring(0, 9)
        let soma = 0
        for(let i = 10; i > 1; i--){
          soma += numeros.charAt(10 - i) * i
        }
        let resto = soma % 11
        let resultado = resto < 2 ? 0 : 11 - resto
        if(resultado.toString() !== digitos.charAt(0)) {
          return false
        }

        //validar segundo dígito
        numeros = cpfNumbers.substring(0, 10)
        soma = 0
        for(let j = 11; j > 1; j--){
          soma += numeros.charAt(11 - j) * j
        }
        resto = soma % 11
        resultado = resto < 2 ? 0 : 11 - resto

        if(resultado.toString() !== digitos.charAt(1)) {
          return false
        }
      }
    }
    return true;
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    if (name === "cpf") {
      setInput({ ...input, cpf: cpfMask(value) });
      if (!validateCPF(value)) {
        setErrorCPF(true);
      } else {
        setErrorCPF(false);
      }
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const { nome, cpf, email, senha, confirmacao } = input;
    const cpfFormatted = Number(removeCpfMask(cpf));;;
    if (errorCPF) {
      dispatch(setAlert(true, "Digite um CPF válido para prosseguir"));
    } else if (senha !== confirmacao) {
      dispatch(setAlert(true, "Senhas não conferem!"));
    } else {
      const data = {
        name: nome,
        cpf: cpfFormatted,
        email,
        senha,
      };
      console.log(data);
      // já faz login?

      // TODO: sucesso... colocar essa mensagem no provider
      // dispatch(setAlert(true, "Cadastro criado com sucesso!"));

      // TODO: erro..
      // dispatch(setAlert(true, "Você já tem cadastro. Deseja efetuar o login?"));
      // redirecionar pro login?

      // setInput({});
    }
  };

  return (
    <>
      <NavBar />
      <PageContent>
        <PaperStyled>
          <form onSubmit={handleSubmission}>
            <Typography variant="h1" align="center">
              CADASTRO
            </Typography>

            <div id="inputs">
              {textFields.map((item) => (
                <TextField
                  required
                  key={item.name}
                  margin="dense"
                  name={item.name}
                  value={input[item.name] || ""}
                  type={item.type}
                  onChange={changeInput}
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder={item.placeholder}
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
                  error={item.error}
                  helperText={item.helperText}
                />
              ))}
            </div>

            <div id="button-wrapper">
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                autoFocus
              >
                CONTINUAR
              </Button>
            </div>
          </form>
        </PaperStyled>
      </PageContent>
      <Footer />
    </>
  );
}

export default CadastroCandidato;
