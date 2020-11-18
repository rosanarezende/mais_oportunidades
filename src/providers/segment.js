import axiosProvider from "./axios";
import { setAlert } from "../actions/alert";
import { setLoading } from "../actions/loading";

export const createSegment = (name) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axiosProvider.post(`/segment`, { name });
    dispatch(setAlert(true, "Setor cadastrado com sucesso!"));
  } catch (error) {
    dispatch(setAlert(true, "Ocorreu um erro no cadastro do setor.")); // colocar mensagem correta
    throw error;
  }
  dispatch(setLoading(false));
};

// ver se isso precisa ou não estar num reducer
export const getAllSegments = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/segment`);
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};
