import { useParams } from "react-router-dom";
import LoadingState from "../components/shered/LoadingState";
import ProductDetailsCard from "../components/ui/ProductDetailsCard";
import { useGetProductQuery } from "../redux/features/admin/productManagementApi";

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

  return (
    <div style={{ width: "90%", margin: "20px auto" }}>
      {isFetching && isLoading ? (
        <LoadingState />
      ) : (
        <ProductDetailsCard product={product?.data} />
      )}
    </div>
  );
};

export default ProductDetails;
