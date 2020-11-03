import { Provider } from "react-redux";
import { history, store } from "./store";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
}

export default App;
