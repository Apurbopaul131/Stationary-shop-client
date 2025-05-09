import { baseApi } from "../../api/baseApi";

const viewUserOrdersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMeOrders: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/me-orders",
          method: "GET",
          params: args[0]?.name && params,
        };
      },
    }),
  }),
});
export const { useGetMeOrdersQuery } = viewUserOrdersApi;
