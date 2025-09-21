/* eslint-disable @typescript-eslint/no-explicit-any */
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrderIds: builder.mutation({
      query: (payload: string[]) => {
        return {
          url: `/order/ids`,
          method: "post",
          data: { payload},
        };
      },
      transformResponse: (response: { data: any }) => {
        return response.data;
      },
     
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: "/order/my-order",
        method: "GET",
      }),
      transformResponse: (response: { data: any }) => {
        return response.data;
      },
      providesTags: [tagTypes.order],
    }),
    getMyVendorOrders: builder.query({
      query: () => ({
        url: "/order/vendor/my-order",
        method: "GET",
      }),
      transformResponse: (response: { data: any }) => {
        return response.data;
      },
      providesTags: [tagTypes.order],
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      }),
      transformResponse: (response: { data: any }) => {
        return response.data;
      },
      providesTags: [tagTypes.order],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ id, status }: { id: string; status: string | undefined }) => {
        return {
          url: `/order/status/${id}`,
          method: "PATCH",
          data: { status },
        };
      },
      transformResponse: (response: { data: any }) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.order],
    }),
    updateOrderPaymentStatus: builder.mutation({
      query: ({
        id,
        paymentStatus,
      }: {
        id: string;
        paymentStatus: string | undefined;
      }) => {
        return {
          url: `/order/payment-status/${id}`,
          method: "PATCH",
          data: { paymentStatus },
        };
      },
      transformResponse: (response: { data: any }) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.order],
    }),

    getSingleOrder: builder.query({
      query: (id: string | undefined) => ({
        url: `/order/${id}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }) => {
        return response.data;
      },
      providesTags: [tagTypes.order],
    }),
  }),
});

export const {
  useGetAllOrderIdsMutation,
  useGetMyOrdersQuery,
  useGetAllOrdersQuery,
  useGetSingleOrderQuery,

  useGetMyVendorOrdersQuery,
  useUpdateOrderStatusMutation,
  useUpdateOrderPaymentStatusMutation,
} = orderApi;
