import { useState } from "react";

import { Paper } from "@material-ui/core";
import { TabStyled, TabsStyled } from "./styles";

import NavBar from "../../../components/NavBar";
import PageWrapper from "../../../components/PageWrapper";
import Footer from "../../../components/Footer";

import PerfilCandidato from "./Perfil";
import Curriculo from "./Curriculo";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function HomeCandidato() {
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
            <TabStyled label="Cadastro" {...a11yProps(0)} />
            <TabStyled label="Currículo" {...a11yProps(1)} />
          </TabsStyled>
        </Paper>

        <PerfilCandidato value={value} />
        <Curriculo value={value} />
      </PageWrapper>

      <Footer />
    </div>
  );
}
