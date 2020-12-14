import axiosProvider from "./axios";
import { setAlert } from "../actions/alert";
import { setLoading } from "../actions/loading";
import {
  setJobById,
  setJobsByFactoryId,
  setAllJobs,
  setJobCreated,
} from "../actions/jobs";

export const createJob = (info) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.post(`/jobs`, info);
    dispatch(setJobCreated(response.data));
    dispatch(setAlert(true, "Vaga cadastrada com sucesso."));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setAlert(true, "Ocorreu um erro na criação da vaga.")); // colocar mensagem correta
    dispatch(setLoading(false));
    throw error;
  }
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
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setAlert(true, "Problema na atualização da vaga")); // ver se é isso mesmo
    dispatch(setLoading(false));
    throw error;
  }
};

export const getJobsByFactoryId = (factoryId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/jobs?factoryID=${factoryId}`);
    //apagar quando consertar
    if (response.data.error) {
      dispatch(
        setJobsByFactoryId(
          [
            { id: 1, title: "aaa" },
            { id: 2, title: "bbb" },
            { id: 3, title: "ccc" },
          ].map((item) => ({
            ...item,
            visualizar: false,
            editar: false,
          }))
          // []
        )
      );
    } else {
      const formatResponse = response.data.map((item) => ({
        ...item,
        visualizar: false,
        editar: false,
      }));
      dispatch(setJobsByFactoryId(formatResponse));
    }
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const getAllJobs = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/jobs`);
    dispatch(setAllJobs(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};
