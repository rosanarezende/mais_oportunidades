import { Provider } from "react-redux";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import { history, store } from "./store";
import theme from "./styles/theme";

import Routes from "./routes";
import Alert from "./components/Alert";
import Loading from "./components/Loading";

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Alert />
        <Loading />
        <Routes history={history} />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
