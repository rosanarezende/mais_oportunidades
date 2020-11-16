import { Provider } from "react-redux";
import { history, store } from "./store";

import Routes from "./routes";
import Alert from "./components/Alert";

function App() {
  return (
    <Provider store={store}>
      <Alert />
      <Routes history={history} />
    </Provider>
  );
}

export default App;
