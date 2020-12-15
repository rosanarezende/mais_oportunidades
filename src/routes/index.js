import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import BuscarVagas from "../pages/BuscarVagas";
import Login from "../pages/Login";
import EsqueciASenha from "../pages/EsqueciASenha";
import PaginaNaoEncontrada from "../pages/PaginaNaoEncontrada";

import HomeCandidato from "../pages/Candidato/Home";
import CadastroCandidato from "../pages/Candidato/Cadastro";

import HomeRecrutador from "../pages/Recrutador/Home";
import CadastroRecrutador from "../pages/Recrutador/Cadastro";

import PrivateRoute from "../authentication/PrivateRoute";

export const routes = {
  landingPage: "/",
  buscarVagas: "/buscar",
  login: "/login",
  esqueciASenha: "/senha",

  cadastroCandidato: "/cadastro/candidato",
  cadastroRecrutador: "/cadastro/recrutador",

  // TALVEZ + PRA FRENTE
  // sobre: "/sobre",
  // contato: "/contato",

  homeCandidato: "/candidato",

  homeRecrutador: "/recrutador",
};

export default function Routes({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.landingPage} component={LandingPage} />
        <Route exact path={routes.buscarVagas} component={BuscarVagas} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.esqueciASenha} component={EsqueciASenha} />
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

        {/* PRIVADAS */}
        <Route
          exact
          path={routes.homeCandidato}
          component={HomeCandidato}
        />
        <PrivateRoute exact path={routes.homeRecrutador} component={HomeRecrutador} />

        <Route path="*" component={PaginaNaoEncontrada} />
      </Switch>
    </ConnectedRouter>
  );
}
