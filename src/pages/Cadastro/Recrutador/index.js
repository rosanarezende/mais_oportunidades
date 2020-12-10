import { useState } from "react";
// import { useDispatch } from "react-redux";

// import { setAlert } from "../../../actions/alert";

import { textFieldsContent } from "./constants";

import { Button, TextField, Typography } from "@material-ui/core";
import { PageContent, PaperStyled } from "../styles";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

function CadastroRecrutador() {
  // const dispatch = useDispatch();

  const [input, setInput] = useState({
    // nome: "",
    // email: "",
    // senha: "",
    // confirmacao: "",
    // cidade: "",
    // telefone: "",
  });

  const [hidenPassword, setHidenPassword] = useState(false);
  const [hidenConfirm, setHidenConfirm] = useState(false);
  const textFields = textFieldsContent(
    hidenPassword,
    setHidenPassword,
    hidenConfirm,
    setHidenConfirm
  );

  const cadastrar = (e) => {
    e.preventDefault();
    // const { cidade, confirmacao, email, nome, senha, telefone } = input;
    // if (senha !== confirmacao) {
    //   dispatch(setAlert(true, "Senhas não conferem!"));
    // } else {
    //   // const data = {
    //   //   nome,
    //   //   email,
    //   //   senha,
    //   //   cidade,
    //   //   telefone,
    //   // };
    //   // console.log(data);
    //   // setInput({});
    //   // setOpenCandidato(false);
    // }
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
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
