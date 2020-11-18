import axiosProvider from "./axios";
import { setAlert } from "../actions/alert";
import { setLoading } from "../actions/loading";

export const createWorkerCategory = (name) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axiosProvider.post(`/workerCategory`, { name });
    dispatch(setAlert(true, "Regime de trabalho cadastrado com sucesso!"));
  } catch (error) {
    dispatch(
      setAlert(true, "Ocorreu um erro no cadastro do regime de trabalho.")
    ); // colocar mensagem correta
    throw error;
  }
  dispatch(setLoading(false));
};

// ver se isso precisa ou não estar num reducer
export const getAllWorkerCategories = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/workerCategory`);
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};
