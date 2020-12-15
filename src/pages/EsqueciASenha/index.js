import { useState } from "react";
// import { useDispatch } from "react-redux";

import { Button, TextField, Typography } from "@material-ui/core";
import { PageContent, PaperStyled } from "./styles";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

function EsqueciASenha() {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const handleSubmission = (e) => {
    e.preventDefault();
    // dispatch(
    //   userLogin({
    //     email,
    //     password: senha,
    //   })
    // );
    // setEmail("");
  };

  return (
    <>
      <NavBar />
      <PageContent>
        <PaperStyled>
          <form onSubmit={handleSubmission}>
            <Typography variant="h1" align="center">
              RECUPERAÇÃO DE SENHA
            </Typography>

            <div id="inputs">
              <TextField
                required
                margin="dense"
                value={email || ""}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                label="DIGITE SEU EMAIL AQUI"
                inputProps={{
                  style: {
                    textAlign: "center",
                  },
                }}
              />
            </div>

            <div id="button-wrapper">
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                autoFocus
                size="large"
              >
                ENVIAR
              </Button>
            </div>
          </form>
        </PaperStyled>
      </PageContent>
      <Footer />
    </>
  );
}

export default EsqueciASenha;
