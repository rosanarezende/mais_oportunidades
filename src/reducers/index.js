import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import search from "./search";
import alertReducer from "./alert";

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    search,
    alertReducer,
  });
