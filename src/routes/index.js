import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import BuscarVagas from "../pages/BuscarVagas";
import CadastroCandidato from "../pages/Cadastro/Candidato";
import CadastroRecrutador from "../pages/Cadastro/Recrutador";
import Vagas from "../pages/Vagas";

export const routes = {
  home: "/",
  buscarVagas: "/buscar-vagas",

  cadastroCandidato: "/cadastro-candidato",
  cadastroRecrutador: "/cadastro-recrutador",

  login: "/login",

  vagas: "/vagas",

  // recrutador: "/recrutador",
  // sobre: "/sobre",
  // contato: "/contato",
};

export default function Routes({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.home} component={LandingPage} />
        <Route exact path={routes.buscarVagas} component={BuscarVagas} />
        <Route exact path={routes.vagas} component={Vagas} />
        <Route
          exact
          path={routes.cadastroCandidato}
          component={CadastroCandidato}
        />
        <Route
          exact
          path={routes.cadastroRecrutador}
          component={CadastroRecrutador}
        />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </ConnectedRouter>
  );
}
