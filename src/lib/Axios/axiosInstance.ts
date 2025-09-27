 
import { auth_key } from "@/constant/auth_key";
import { ResponseSuccessType } from "@/types/common";
import { getFromLocalStorage } from "@/utils/LocalStorage/localStorage";
import axios, { AxiosResponse } from "axios";
 
const instance = axios.create();

// instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.timeout = 60000;
instance.defaults.withCredentials = true;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const accessToken = getFromLocalStorage(auth_key);

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


instance.interceptors.response.use(
  function (response): AxiosResponse<ResponseSuccessType> {
    return {
      ...response,
      data: {
        data: response?.data,
        meta: response?.data?.meta,
      },
    };
  },

  async function onRejected(error) {
    return Promise.reject({
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      errorMessages: error?.response?.data?.message,
    });
  }
);



export { instance };

