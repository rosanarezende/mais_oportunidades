import axiosProvider from "./axios";
import { setAlert } from "../actions/alert";
import { setLoading } from "../actions/loading";
import { setAllSegments } from "../actions/segment";

export const createSegment = (name) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axiosProvider.post(`/segment`, { name });
    dispatch(setAlert(true, "Segmento cadastrado com sucesso!"));
    dispatch(getAllSegments());;
  } catch (error) {
    dispatch(setAlert(true, "Ocorreu um erro no cadastro do segmento.")); // colocar mensagem correta
    throw error;
  }
  dispatch(setLoading(false));
};

export const getAllSegments = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/segment`);
    dispatch(setAllSegments(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};
