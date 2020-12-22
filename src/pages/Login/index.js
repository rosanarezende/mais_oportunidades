import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../routes";

import { userLogin } from "../../providers/authentication";

import { Button, TextField, Typography } from "@material-ui/core";
import { PageContent, PaperStyled } from "./styles";
import { textFieldsContent } from "./constants";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

function Login() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: "",
    senha: "",
  });

  const [hidenPassword, setHidenPassword] = useState(false);
  const textFields = textFieldsContent(hidenPassword, setHidenPassword);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const { email, senha } = input;
    dispatch(
      userLogin({
        email,
        password: senha,
      })
    );
    setInput({});
  };

  return (
    <>
      <NavBar />
      <PageContent>
        <PaperStyled>
          <form onSubmit={handleSubmission}>
            <Typography variant="h1" align="center">
              LOGIN
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
                  error={item.error}
                  helperText={item.helperText}
                />
              ))}
            </div>

            <div
              id="link-wrapper"
              onClick={() => dispatch(push(routes.esqueciASenha))}
            >
              <Typography variant="overline" align="center">
                Esqueci minha senha
              </Typography>
            </div>

            <div id="button-wrapper">
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                autoFocus
                size="large"
              >
                ENTRAR
              </Button>
            </div>
          </form>
        </PaperStyled>
      </PageContent>
      <Footer />
    </>
  );
}

export default Login;
