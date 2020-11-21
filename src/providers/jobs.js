import axiosProvider from "./axios";
import { setAlert } from "../actions/alert";
import { setLoading } from "../actions/loading";
import { setJobById, setJobsByFactoryId, setAllJobs } from "../actions/jobs";

export const createJob = (info) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axiosProvider.post(`/jobs`, info);
    dispatch(setAlert(true, "Vaga criada com sucesso!"));
  } catch (error) {
    dispatch(setAlert(true, "Ocorreu um erro na criação da vaga.")); // colocar mensagem correta
    throw error;
  }
  dispatch(setLoading(false));
};

export const getJobById = (jobId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(
      `/jobs?jobID=${jobId}&publish=true`
    );
    dispatch(setJobById(response.data[0]));
  } catch (error) {
    throw error;
  }
  dispatch(setLoading(false));
};

// Atualmente é possível atualizar apenas o title e o campo IsPublish (que define se a vaga está publicada ou não).
export const editJob = (jobId, factoryId, info) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axiosProvider.put(`/jobs/${jobId}/factory/${factoryId}`, info);
    dispatch(getJobById(jobId));
    dispatch(setAlert(true, "Vaga atualizada com sucesso")); // ver se é esse o texto
  } catch (error) {
    dispatch(setAlert(true, "Problema na atualização da vaga")); // ver se é isso mesmo
    throw error;
  }
  dispatch(setLoading(false));
};

export const getJobsByFactoryId = (factoryId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/jobs?factoryID=${factoryId}`);
    dispatch(setJobsByFactoryId(response.data));
  } catch (error) {
    throw error;
  }
  dispatch(setLoading(false));
};

export const getAllJobs = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/jobs`);
    dispatch(setAllJobs(response.data));
  } catch (error) {
    throw error;
  }
  dispatch(setLoading(false));
};
