import axiosProvider from "./axios";
import { setAlert } from "../actions/alert";
import { setLoading } from "../actions/loading";
import { setAllSeniorities } from "../actions/seniority";

export const createSeniority = (name) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axiosProvider.post(`/seniority`, { name });
    dispatch(setAlert(true, "Senioridade cadastrada com sucesso!"));
  } catch (error) {
    dispatch(setAlert(true, "Ocorreu um erro no cadastro da senioridade.")); // colocar mensagem correta
    throw error;
  }
  dispatch(setLoading(false));
};

export const getAllSeniorities = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/seniority`);
    dispatch(setAllSeniorities(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};
