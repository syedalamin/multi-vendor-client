/* eslint-disable @typescript-eslint/no-explicit-any */
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const shippingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createShipping: builder.mutation({
      query: (data) => ({
        url: "/order/create",
        method: "POST",
        contentType: "application/json",
        data: data,
      }),

      invalidatesTags: [tagTypes.shipping, tagTypes.cart],
    }),
    getAllShipping: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      }),
      transformResponse: (response: { data: { data: any[] } }) => {
        return response.data;
      },
      providesTags: [tagTypes.shipping],
    }),
  }),
});

export const { useCreateShippingMutation, useGetAllShippingQuery } =
  shippingApi;
