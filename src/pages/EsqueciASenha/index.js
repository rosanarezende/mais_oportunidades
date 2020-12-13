// import { Button, TextField, Typography } from "@material-ui/core";
import { PageContent, PaperStyled } from "./styles";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

function EsqueciASenha() {
  return (
    <>
      <NavBar />
      <PageContent>
        <PaperStyled>
          <form>EsqueciASenha</form>
        </PaperStyled>
      </PageContent>
      <Footer />
    </>
  );
}

export default EsqueciASenha;
