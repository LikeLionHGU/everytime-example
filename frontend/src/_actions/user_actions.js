import axiosInstance, { endpoints } from "../axios";

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const AUTH_USER = "AUTH_USER";

export function registerUser(dataToSubmit) {
  const request = axiosInstance
    .post(endpoints.auth.register, dataToSubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axiosInstance
    .post(endpoints.auth.login, dataToSubmit)
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axiosInstance
    .get(endpoints.auth.logout)
    .then((response) => response.data);
  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function auth() {
  const request = axiosInstance
    .get(endpoints.auth.auth)
    .then((response) => response.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
}
