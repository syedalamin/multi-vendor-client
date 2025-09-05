/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyOrders: builder.query({
      query: () => ({
        url: "/order/my-order",
        method: "GET",
      }),
      transformResponse: (response: { data: any }) => {
        return response.data;
      },
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      }),
      transformResponse: (response: { data: any }) => {
        return response.data;
      },
    }),
    updateOrderStatus: builder.query({
      query: (id: string | undefined) => ({
        url: `/order/status/${id}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }) => {
        return response.data;
      },
    }),
    getSingleOrder: builder.query({
      query: (id: string | undefined) => ({
        url: `/order/${id}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetMyOrdersQuery, useGetAllOrdersQuery, useUpdateOrderStatusQuery, useGetSingleOrderQuery } = orderApi;
