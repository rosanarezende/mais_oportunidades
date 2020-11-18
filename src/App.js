import { Provider } from "react-redux";
import { history, store } from "./store";

import Routes from "./routes";
import Alert from "./components/Alert";
import Loading from "./components/Loading";

function App() {
  return (
    <Provider store={store}>
      <Alert />
      <Loading />
      <Routes history={history} />
    </Provider>
  );
}

export default App;
