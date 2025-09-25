import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        contentType: "application/json",
        data: data,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        contentType: "application/json",
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        contentType: "application/json",
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = authApi;
