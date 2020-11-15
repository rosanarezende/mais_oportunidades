import { useState } from "react";

import { Paper } from "@material-ui/core";
import { TabStyled, TabsStyled } from "./styles";

import NavBar from "../../components/NavBar";
import PageWrapper from "../../components/PageWrapper";
import CriarVaga from "./CriarVaga";
import MeuPerfil from "./MeuPerfil";
import MinhasVagas from "./MinhasVagas";
import Footer from "../../components/Footer";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Vagas() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <NavBar />
      <PageWrapper>
        <Paper square>
          <TabsStyled
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <TabStyled label="Vagas" {...a11yProps(0)} />
            <TabStyled label="Minhas Vagas" {...a11yProps(1)} />
            <TabStyled label="Meu Perfil" {...a11yProps(2)} />
          </TabsStyled>
        </Paper>

        <CriarVaga value={value} />
        <MeuPerfil value={value} />
        <MinhasVagas value={value} />
      </PageWrapper>
      <Footer />
    </div>
  );
}
