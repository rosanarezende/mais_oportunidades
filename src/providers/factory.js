import axiosProvider from "./axios";
import { userLogin } from "./authentication";
import { setAlert } from "../actions/alert";
import { setLoading } from "../actions/loading";
import { setAllFactories, setFactoryById } from "../actions/factory";
import { getToken } from "./storage";

export const createFactory = (info) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.post(`/factory`, info);
    dispatch(setAlert(true, "Empresa cadastrada com sucesso!"));
    const data = {
      email: response.data.email,
      password: response.data.password,
    };
    dispatch(userLogin(data));
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
     --- "id": 1,
    "name": "IBM teste",
    "cnpj": "12345678912645",
    "description": "a descrição é esssa bla bla bla bla dskdihdisdwfd  jebnfcbnerihncirnr fdfdrfreferrredfverfv gtrgrtgrtgrgvb",
    --- "mobilephone": null,
    "address": "rua cidade de osasco 486",
    "isActive": false,
    "segment": null
}
*/
export const editFactory = (factoryId, info) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axiosProvider.put(`/factory/${factoryId}`, info, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    dispatch(getFactoryById(factoryId));
    // dispatch(setAlert(true, "Informações da empresa atualizadas com sucesso")); // ver se é esse o texto
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(
      setAlert(true, "Problema na atualização das informações da empresa")
    ); // ver se é isso mesmo
    dispatch(setLoading(false));
    throw error;
  }
};

export const getAllFactories = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosProvider.get(`/factory?active=true`);
    dispatch(setAllFactories(response.data));
  } catch (error) {
    throw error;
  }
  dispatch(setLoading(false));
};
