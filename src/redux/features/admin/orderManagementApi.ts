import { baseApi } from "../../api/baseApi";

const orderMangementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/orders",
          method: "GET",
          params: args[0]?.name && params,
        };
      },
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        method: "GET",
        params: { order_id },
      }),
    }),
    totalRevenue: builder.query({
      query: () => ({
        url: "/orders/revenue",
        method: "GET",
      }),
    }),
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/orders",
        method: "POST",
        body: orderInfo,
      }),
    }),
    cancleOrder: builder.mutation({
      query: (orderId) => ({
        url: `/orders/cancle-order/${orderId}`,
        method: "DELETE",
      }),
    }),

    acceptOrder: builder.mutation({
      query: (orderId) => ({
        url: `/orders/accept-order/${orderId}`,
        method: "PATCH",
      }),
    }),
  }),
});
export const {
  useGetAllOrderQuery,
  useCancleOrderMutation,
  useAcceptOrderMutation,
  useCreateOrderMutation,
  useVerifyOrderQuery,
  useTotalRevenueQuery,
} = orderMangementApi;
