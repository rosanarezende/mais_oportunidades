import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import BuscarVagas from "../pages/BuscarVagas";
import Login from "../pages/Login";
import PaginaNaoEncontrada from "../pages/PaginaNaoEncontrada";

import HomeCandidato from "../pages/Candidato/Home";
import CadastroCandidato from "../pages/Candidato/Cadastro";
import Curriculo from "../pages/Candidato/Curriculo";

import HomeRecrutador from "../pages/Recrutador/Home";
import CadastroRecrutador from "../pages/Recrutador/Cadastro";

export const routes = {
  landingPage: "/",
  buscarVagas: "/buscar",
  login: "/login",

  // TALVEZ + PRA FRENTE
  // sobre: "/sobre",
  // contato: "/contato",

  homeCandidato: "/candidato",
  cadastroCandidato: "/candidato/cadastro",
  cadastroCurriculo: "/candidato/curriculo",

  homeRecrutador: "/recrutador",
  cadastroRecrutador: "/recrutador/cadastro",
};

export default function Routes({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.landingPage} component={LandingPage} />
        <Route exact path={routes.buscarVagas} component={BuscarVagas} />
        <Route exact path={routes.login} component={Login} />

        {/* PRIVADAS */}
        <Route
          exact
          path={routes.homeCandidato}
          component={HomeCandidato}
        />
        <Route
          exact
          path={routes.cadastroCandidato}
          component={CadastroCandidato}
        />
        <Route
          exact
          path={routes.cadastroCurriculo}
          component={Curriculo}
        />

        <Route 
          exact
          path={routes.homeRecrutador}
          component={HomeRecrutador}
        />
        <Route
          exact
          path={routes.cadastroRecrutador}
          component={CadastroRecrutador}
        />

        <Route path="*" component={PaginaNaoEncontrada} />
      </Switch>
    </ConnectedRouter>
  );
}
