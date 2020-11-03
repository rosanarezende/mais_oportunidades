import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import BuscarVagas from "../pages/BuscarVagas";
import LandingPage from "../pages/LandingPage";

export default function Routes({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/buscar-vagas" component={BuscarVagas} />
      </Switch>
    </ConnectedRouter>
  );
}
