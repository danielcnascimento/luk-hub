import { axiosCancelable } from "../helper/axios.helper";

const axiosConfig = {
  baseURL: "https://api.github.com/",
  auth: {
    username: process.env.CLIENT_ID,
    password: process.env.CLIENT_SECRET,
  },
};

export const searchRepo = (query) => {
  return axiosCancelable(`search/repositories?q=${query}`, axiosConfig);
};
