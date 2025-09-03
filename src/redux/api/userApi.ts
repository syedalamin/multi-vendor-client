import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerCustomer: builder.mutation({
      query: (data) => ({
        url: "/user/create-customer",
        method: "POST",
        // contentType: "application/json",
        data: data,
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/user/create-admin",
        method: "POST",
   
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.admin],
    }),
    createVendor: builder.mutation({
      query: (data) => ({
        url: "/user/create-vendor",
        method: "POST",
   
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.vendor],
    }),
  }),
});

export const { useRegisterCustomerMutation, useCreateAdminMutation , useCreateVendorMutation} = userApi;
