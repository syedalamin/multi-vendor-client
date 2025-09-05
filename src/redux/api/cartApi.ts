/* eslint-disable @typescript-eslint/no-explicit-any */
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCart: builder.mutation({
      query: (data) => ({
        url: "/cart/create",
        method: "POST",
        contentType: "application/json",
        data: data,
      }),
      transformResponse: (response: { data: any[] }) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.cart],
    }),
    getAllCart: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      transformResponse: (response: { data: { data: any[] } }) => {
        return response.data;
      },
      providesTags: [tagTypes.cart],
    }),
    getAdminAllCart: builder.query({
      query: () => ({
        url: "/cart/all-cart",
        method: "GET",
      }),
      transformResponse: (response: { data: { data: any[] } }) => {
        return response.data;
      },
      providesTags: [tagTypes.cart],
    }),
    getTotalCart: builder.query({
      query: () => ({
        url: "/cart/cart-total",
        method: "GET",
      }),
     
      providesTags: [tagTypes.cart],
    }),
    getSingleCart: builder.query({
      query: (id: string | undefined) => ({
        url: `/cart/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.cart],
    }),
    updateCart: builder.mutation({
      query: (data) => ({
        url: `/cart/${data.id}`,
        method: "PATCH",
        data: { productId: data.productId, quantity: data.quantity },
      }),
      invalidatesTags: [tagTypes.cart],
    }),
    deleteCart: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.cart],
    }),
  }),
});

export const {
  useCreateCartMutation,
  useGetAllCartQuery,
  useGetSingleCartQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,
  useGetAdminAllCartQuery,
  useGetTotalCartQuery,
} = cartApi;
