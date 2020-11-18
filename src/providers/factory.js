import axiosProvider from "./axios";
import { setAlert } from "../actions/alert";
import { setLoading } from "../actions/loading";
import { setAllFactories, setFactoryById } from "../actions/factory";

/*
{
  "name": "Evandra empresa",
  "cnpj": "1234545",
  "description": "Empresa mais top de todas do mundo",
  "mobilephone": "13997747643",
  "address": "rua cidade de osasco",
  "isActive": false,
  "segment_id": 1
}
Obs: Não está sendo utilizado email e senha durante a criação por enquanto.
*/
export const createFactory = (info) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axiosProvider.post(`/factory`, info);
    dispatch(setAlert(true, "Empresa cadastrada com sucesso!"));
  } catch (error) {
    dispatch(setAlert(true, "Ocorreu um erro no cadastro da empresa.")); // colocar mensagem correta
    throw error;
  }
  dispatch(setLoading(false));
};

export const getFactoryById = (factoryId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/factory?factoryID=${factoryId}`);
    dispatch(setFactoryById(response.data));
  } catch (error) {
    throw error;
  }
  dispatch(setLoading(false));
};

/*
{
  "nameFactory": "nome"
}
Atualmente é possível apenas alterar o nome da empresa.
(Rota sofrerá muitas atualizações)
*/
export const editFactory = (factoryId, info) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axiosProvider.put(`/factory/${factoryId}`, info);
    dispatch(getFactoryById(factoryId));
    dispatch(setAlert(true, "Informações da empresa atualizadas com sucesso")); // ver se é esse o texto
  } catch (error) {
    dispatch(
      setAlert(true, "Problema na atualização das informações da empresa")
    ); // ver se é isso mesmo
    throw error;
  }
  dispatch(setLoading(false));
};

// ver com as meninas a necessidade do query param por conta do layout
export const getAllFactories = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/factory`);
    dispatch(setAllFactories(response.data));
  } catch (error) {
    throw error;
  }
  dispatch(setLoading(false));
};
