import { baseApi } from "../../api/baseApi";

const productManageMentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllproduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/admin/products",
        method: "POST",
        body: product,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/admin/products/${productId}`,
        method: "DELETE",
      }),
    }),
    getProduct: builder.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ productId, ...productData }) => ({
        url: `/admin/products/${productId}`,
        method: "PATCH",
        body: productData,
      }),
    }),
  }),
});
export const {
  useGetAllproductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
} = productManageMentApi;
