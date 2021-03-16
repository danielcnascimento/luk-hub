import { axiosCancelable } from "../helper/axios.helper";
import { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://api.github.com/",
  auth: {
    username: process.env.CLIENT_ID,
    password: process.env.CLIENT_SECRET,
  },
};

export const searchRepo = (query: String) => {
  return axiosCancelable(`search/repositories?q=${query}`, axiosConfig);
};
