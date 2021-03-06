import { PageContent, PaperStyled } from "./styles";
import { Typography } from "@material-ui/core";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

function PaginaNaoEncontrada() {
  return (
    <>
      <NavBar />
      <PageContent>
        <PaperStyled>
          <div>
            <Typography variant="h4" align="center">
              PÁGINA NÃO ENCONTRADA
            </Typography>
          </div>
        </PaperStyled>
      </PageContent>
      <Footer />
    </>
  );
}

export default PaginaNaoEncontrada;
