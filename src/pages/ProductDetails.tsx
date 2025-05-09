import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "react-router-dom";
import LoadingState from "../components/shered/LoadingState";
import ProductContainer from "../components/shered/ProductContainer";
import ProductDetailsCard from "../components/ui/ProductDetailsCard";
import {
  useGetAllproductQuery,
  useGetProductQuery,
} from "../redux/features/admin/productManagementApi";

const ProductDetails = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isFetching,
  } = useGetProductQuery(productId, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const { data: products } = useGetAllproductQuery(
    product?.data?.category
      ? [{ name: "category", value: product.data.category }]
      : skipToken,
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );
  const { data: avgProducts } = useGetAllproductQuery(
    product?.data?.rating ? [{ name: "rating", value: 3 }] : skipToken,
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );
  const { data: topProducts } = useGetAllproductQuery(
    product?.data?.rating ? [{ name: "rating", value: 5 }] : skipToken,
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );

  return (
    <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      {isFetching && isLoading ? (
        <LoadingState />
      ) : (
        <ProductDetailsCard product={product?.data} />
      )}

      <ProductContainer products={products?.data} title="Related Products" />

      <ProductContainer products={topProducts?.data} title="Top Products" />
      <ProductContainer products={avgProducts?.data} title="Avarage Products" />
    </div>
  );
};

export default ProductDetails;
