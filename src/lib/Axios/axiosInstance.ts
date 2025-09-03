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

// Add a response interceptor
instance.interceptors.response.use(
  function (response): AxiosResponse<ResponseSuccessType> {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

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

// const config = error?.config;

//     if (error?.response?.status === 500 && !config.sent) {
//       config.sent = true;
//       const res = await getNewAccessToken();
//       const accessToken = res?.data?.accessToken;

//       if (accessToken) {
//         config.headers["Authorization"] = accessToken;
//         setToLocalStorage(auth_key, accessToken);
//         return instance(config);
//       }
//     } else {
//       const responseObject = {
//         statusCode: error?.response?.data?.statusCode || 500,
//         message: error?.response?.data?.message || "Something went wrong",
//         errorMessages: error?.response?.data?.message,
//       };
//       return responseObject;
//     }
