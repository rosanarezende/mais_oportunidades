import axiosProvider from "./axios";

import * as storage from "./storage";

const KEY = "auth-user";

export function isLogin() {
  const data = storage.getItem(KEY);
  return data === null ? false : true;
  // if(data === null){
  //    return false
  // } else {
  //     return true
  // }
}

export async function userLogin(param) {
  //  const response = await axiosProvider.post('/user/login', param)
  //  try {
  //      storage.storeItem(KEY, response.data)
  //      return response
  //  } catch (error) {
  //      throw(error)
  //  }
}

export async function checkToken(param) {
  // return axiosProvider.post('/user/verify-auth', param)
}
