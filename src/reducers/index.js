import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import search from "./search";

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    search,
  });
