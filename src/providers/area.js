import axiosProvider from "./axios";
import { setAlert } from "../actions/alert";
import { setLoading } from "../actions/loading";
import { setAllAreas } from "../actions/area";

export const createArea = (name) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axiosProvider.post(`/area`, { name });
    dispatch(setAlert(true, "Setor cadastrado com sucesso!"));
  } catch (error) {
    dispatch(setAlert(true, "Ocorreu um erro no cadastro da área.")); // colocar mensagem correta
    throw error;
  }
  dispatch(setLoading(false));
};

// ver se isso precisa ou não estar num reducer
export const getAllAreas = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/area`);
    dispatch(setAllAreas(response.data));
    dispatch(setLoading(false));
    // return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};
