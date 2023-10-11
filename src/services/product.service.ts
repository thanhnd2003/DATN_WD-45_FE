import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts } from "../types/product.service";

const productAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
    }),
    endpoints: builder => ({
        fetchProduct: builder.query<IProducts[], void>({
            query: () => "/product",
        }),
        getProduct: builder.query<{ product: IProducts | null }, number>({
            query: id => ({
                url: `/product/${id}`,
                method: "GET",
            }),
        }),
        removeProduct: builder.mutation<void, number>({
            query: id => ({
                url: `/product/${id}`,
                method: "DELETE"
            }),
        }),
        addProduct: builder.mutation<void, Partial<IProducts>>({
            query: product => ({
                url: `/product`,
                method: "POST",
                body: product
            }),
        }),
        updateProduct: builder.mutation<void, IProducts>({
            query: product => ({
                url: `/product/${product.id}`,
                method: "PUT",
                body: product
            }),
        }),
        fetchComment: builder.query<any, void>({
            query: () => "/comment",
        }),
        getComment: builder.query<{ product: any | null }, number>({
            query: id => ({
                url: `/comment/${id}`,
                method: "GET",
            }),
        }),
        removeComment: builder.mutation<void, number>({
            query: id => ({
                url: `/comment/${id}`,
                method: "DELETE"
            }),
        }),
        addComment: builder.mutation<void, Partial<any>>({
            query: comment => ({
                url: `/comment/add`,
                method: "POST",
                body: comment
            }),
        }),
        updateComment: builder.mutation<void, any>({
            query: comment => ({
                url: `/comment/${comment.id}`,
                method: "PUT",
                body: comment
            }),
        }),
        getUser: builder.query<{ product: any | null }, string>({
            query: id => ({
                url: `/user/${id}`,
                method: "GET",
            }),
        }),
    })
});


export const {
    useFetchProductQuery,
    useGetProductQuery,
    useRemoveProductMutation,
    useAddProductMutation,
    useUpdateProductMutation,
    useFetchCommentQuery,
    useGetCommentQuery,
    useAddCommentMutation,
    useRemoveCommentMutation,
    useUpdateCommentMutation,
    useGetUserQuery
} = productAPI;


export default productAPI;
