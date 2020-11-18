import axios from "axios";

const URL = "https://develop-continuousdelivery.herokuapp.com";

const axiosProvider = axios.create({
  baseURL: URL,
});

axiosProvider.interceptors.response.use(
  (response) => {
    return new Promise(async (resolve, reject) => {
      resolve(response);
    });
  },
  (err) => {
    return new Promise(async (resolve, reject) => {
      reject(err);
    });
  }
);

export default axiosProvider;
