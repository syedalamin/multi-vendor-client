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
  }),
});

export const { useRegisterCustomerMutation } = userApi;
