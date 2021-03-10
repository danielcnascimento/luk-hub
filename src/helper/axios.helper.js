import axios from "axios";

const cancelConfig = {
  request: null,
  cancelToken: null,
};

export const axiosCancelable = async (url, config) => {
  if (cancelConfig.request) {
    cancelConfig.request.cancel("canceled");
  }

  cancelConfig.request = axios.CancelToken.source();
  cancelConfig.cancelToken = cancelConfig.request.CancelToken;
  Object.assign(cancelConfig, config); //merge

  try {
    const res = await axios.get(url, cancelConfig);

    return res;
  } catch (error) {
    if (error.message !== "canceled") {
      throw error;
    }
  }
};
