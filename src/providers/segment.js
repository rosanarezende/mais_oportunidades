import axiosProvider from "./axios";
import { setAlert } from "../actions/alert";
import { setLoading } from "../actions/loading";
import { setAllSegments, setCreatedSegment } from "../actions/segment";

export const createSegment = (name) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.post(`/segment`, { name });
    dispatch(setCreatedSegment(response.data));
    dispatch(setAlert(true, "Segmento cadastrado com sucesso!"));
    dispatch(getAllSegments());
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setAlert(true, "Ocorreu um erro no cadastro do segmento.")); // colocar mensagem correta
    dispatch(setLoading(false));
    throw error;
  }
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
