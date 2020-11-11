import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import { routes } from "../utils";

import BuscarVagas from "../pages/BuscarVagas";
import LandingPage from "../pages/LandingPage";
import Vagas from "../pages/Vagas";

export default function Routes({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.home} component={LandingPage} />
        <Route exact path={routes.buscarVagas} component={BuscarVagas} />
        <Route exact path={routes.vagas} component={Vagas} />

        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </ConnectedRouter>
  );
}
