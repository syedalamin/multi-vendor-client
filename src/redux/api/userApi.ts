import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerCustomer: builder.mutation({
      query: (data) => ({
        url: "/user/create-customer",
        method: "POST",
        contentType: "application/json",
        data: data,
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/user/create-admin",
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

export const { useRegisterCustomerMutation, useCreateAdminMutation } = userApi;
