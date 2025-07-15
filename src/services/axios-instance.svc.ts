import axios from "axios";
import QueryString from "qs";

export const AxiosInstance = axios.create({
  baseURL: 'https://687611dc814c0dfa653a7c56.mockapi.io/api/ec/',
  paramsSerializer: (params) => {
    return QueryString.stringify(params);
  },
});

AxiosInstance.defaults.headers.post["Content-Type"] = "application/json";
AxiosInstance.defaults.headers["Accept"] = "application/json";
AxiosInstance.defaults.headers["Content-Type"] = "application/json";
