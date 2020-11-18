import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import search from "./search";
import alertReducer from "./alert";
import loadingReducer from "./loading";
import jobsReducer from "./jobs";

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    search,
    alertReducer,
    loadingReducer,
    jobsReducer,
  });
