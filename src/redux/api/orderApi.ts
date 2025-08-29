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
  }),
});

export const { useGetMyOrdersQuery } = orderApi;
