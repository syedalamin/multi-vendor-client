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
      transformResponse: (response:any ) => {
        return response.data;
      },
      providesTags: [tagTypes.cart, tagTypes.order, tagTypes.product],
    }),
    getAllAdminMetaData: builder.query({
      query: () => ({
        url: "/meta-data/admin",
        method: "GET",
      }),
      transformResponse: (response:any ) => {
        return response.data;
      },
      providesTags: [tagTypes.cart, tagTypes.order, tagTypes.product],
    }),
  }),
});

export const { useGetMyVendorMetaDataQuery,useGetAllAdminMetaDataQuery   } =
  metaDataApi;
