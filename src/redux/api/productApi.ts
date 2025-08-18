import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getProductId : builder.query({
            query: (id: string | undefined)=>({
                url: `/product/id/${id}`,
                method: "GET",

            })
        })
    })
})


export const {useGetProductIdQuery} = productApi;