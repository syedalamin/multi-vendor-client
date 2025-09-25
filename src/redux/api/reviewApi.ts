/* eslint-disable @typescript-eslint/no-explicit-any */

import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    getProductRating: builder.query({
      query: (id: string | undefined) => ({
        url: `/review/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: [tagTypes.review],
    }),

    createRating: builder.mutation({
      query: ({ id, data }: { id: string; data: any }) => ({
        url: `/review/${id}`,
        method: "PATCH",
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const { useCreateRatingMutation, useGetProductRatingQuery } = reviewApi;
