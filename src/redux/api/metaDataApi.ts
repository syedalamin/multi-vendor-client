/* eslint-disable @typescript-eslint/no-explicit-any */
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const metaDataApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyVendorMetaData: builder.query({
      query: () => ({
        url: "/meta-data/vendor",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response.data;
      },
      providesTags: [tagTypes.cart, tagTypes.order, tagTypes.product],
    }),
    getAllAdminMetaData: builder.query({
      query: () => ({
        url: "/meta-data/admin",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response.data;
      },
      providesTags: [tagTypes.cart, tagTypes.order, tagTypes.product],
    }),
    getImageData: builder.query({
      query: () => ({
        url: "/meta-data/image",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response.data;
      },
      providesTags: [tagTypes.images],
    }),
    createImageData: builder.mutation({
      query: (data) => ({
        url: "/meta-data/images",
        method: "POST",
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.images],
    }),
  }),
});

export const {
  useGetMyVendorMetaDataQuery,
  useGetAllAdminMetaDataQuery,
  useGetImageDataQuery,
  useCreateImageDataMutation,
} = metaDataApi;
