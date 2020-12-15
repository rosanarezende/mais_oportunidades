import { useState } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../../../actions/alert";

import { createFactory } from "../../../providers/factory";

import { textFieldsContent } from "./constants";

import { Button, TextField, Typography } from "@material-ui/core";
import { PageContent, PaperStyled } from "./styles";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

function CadastroRecrutador() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    nome: "",
    email: "",
    cnpj: "",
    senha: "",
    confirmacao: "",
  });

  const [hidenPassword, setHidenPassword] = useState(false);
  const [hidenConfirm, setHidenConfirm] = useState(false);
  const textFields = textFieldsContent(
    hidenPassword,
    setHidenPassword,
    hidenConfirm,
    setHidenConfirm
  );

  const cnpjMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const removeCnpjMask = (value) => value.replace(/[./-]/g, "");

  const changeInput = (e) => {
    const { name, value } = e.target;
    if (name === "cnpj") {
      setInput({ ...input, cnpj: cnpjMask(value) });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const cadastrar = (e) => {
    e.preventDefault();
    const { confirmacao, email, nome, senha, cnpj } = input;
    const cnpjFormatted = Number(removeCnpjMask(cnpj));
    if (senha !== confirmacao) {
      dispatch(setAlert(true, "Senhas não conferem!"));
    } else {
      const data = {
        name: nome,
        cnpj: cnpjFormatted,
        email,
        password: senha,
        confirmPassword: confirmacao,
      };
      dispatch(createFactory(data));
      setInput({});
    }
  };

  return (
    <>
      <NavBar />
      <PageContent>
        <PaperStyled>
          <form onSubmit={cadastrar}>
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
                  label={item.label}
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

export default CadastroRecrutador;
