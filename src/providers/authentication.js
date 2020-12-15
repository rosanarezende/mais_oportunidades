import { push } from "connected-react-router";
import { routes } from "../routes";
import axiosProvider from "./axios";
import { setAlert } from "../actions/alert";
import { setLoading } from "../actions/loading";

import * as storage from "./storage";

const KEY = "auth-user";

export const isLogin = () => {
  const data = storage.getItem(KEY);
  return data === null ? false : true;
};

/*
{
  "email": "rosana@empresa.com",
  "password": "123456"
}
*/
export const userLogin = (info) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.post("/session", info);
    storage.storeItem(KEY, response.data);
    dispatch(setLoading(false));
    if(response.data.isFactory) {
      dispatch(push(routes.homeRecrutador));
    } else {
      dispatch(push(routes.homeCandidato));
    }
    return response.data;
  } catch (error) {
    dispatch(setAlert(true, "Dados incorretos. Tente novamente ou faça seu cadastro."));
    dispatch(setLoading(false));
    throw error;
  }
}

export async function checkToken(param) {
  // return axiosProvider.post('/user/verify-auth', param)
}
