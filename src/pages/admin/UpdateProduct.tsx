/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Row } from "antd";

import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import PcForm from "../../components/form/PcForm";
import PcInput from "../../components/form/pcInput";
import PcNumberInput from "../../components/form/PcNumberInput";
import PcSelactInput from "../../components/form/PcSelectInput";
import PcTextarea from "../../components/form/PcTextarea";
import LoadingSpinner from "../../components/shered/LoadingSpinner";
import {
  productCategoriesOptions,
  productStockOptions,
} from "../../constants/createproduct.constants";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../redux/features/admin/productManagementApi";
import { updateProductValidationSchmea } from "../../schemas/product.schema";
import { TProduct, TResponse } from "../../types";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isFetching,
  } = useGetProductQuery(productId, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  const [updateProduct] = useUpdateProductMutation();
  const updateProductOnsubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("updating Product...", {
      style: {
        padding: "10px",
        borderRadius: "8px",
        color: "yellowgreen",
      },
      position: "top-center",
    });
    const updatedDataWithId = {
      productId,
      ...data,
    };
    try {
      //call the mutaion function
      const result = (await updateProduct(
        updatedDataWithId
      )) as TResponse<TProduct>;
      //show product already exist error!
      if (result?.error) {
        toast.error(result?.error?.data?.message, {
          id: toastId,
          duration: 2000,
          style: {
            padding: "10px",
            borderRadius: "8px",
            color: "red",
          },
          position: "top-center",
        });
      }
      //show success toast
      else {
        toast.success(result?.data?.message, {
          style: {
            padding: "10px",
            borderRadius: "8px",
            color: "green",
          },
          position: "top-center",
          id: toastId,
          duration: 2000,
        });
        navigate(`/products/${productId}`);
      }
    } catch (err: any) {
      toast.error("Product creation failed!", {
        id: toastId,
        duration: 2000,
        style: {
          padding: "10px",
          borderRadius: "8px",
          color: "red",
        },
        position: "top-center",
      });
    }
  };
  const productDefaultValues = {
    name: product?.data?.name,
    brand: product?.data?.brand,
    category: product?.data?.category,
    description: product?.data?.description,
    image: product?.data?.image,
    inStock: product?.data?.inStock,
    price: product?.data?.price,
    quantity: product?.data?.quantity,
  };
  if (isLoading && isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <Row justify="center">
      <Col xs={{ span: 24 }} sm={{ span: 12 }}>
        {product && (
          <PcForm
            onSubmit={updateProductOnsubmit}
            resolver={zodResolver(updateProductValidationSchmea)}
            defaultValues={productDefaultValues}
          >
            <PcInput type="text" name="name" label="Title:" />
            <PcInput type="text" name="brand" label="Brand:" />
            <PcNumberInput name="price" label="Price:" />
            <PcSelactInput
              name="category"
              label="Category:"
              options={productCategoriesOptions}
              placeholder="Selact an categories:"
            />
            <PcInput type="url" name="image" label="Image url:" />
            <PcTextarea name="description" label="Description:" rows={4} />
            <PcNumberInput name="quantity" label="Quantity:" />
            <PcSelactInput
              name="inStock"
              label="Stock:"
              options={productStockOptions}
              placeholder="Selact an option:"
            />
            <Button htmlType="submit" color="danger" variant="solid">
              Update Product
            </Button>
          </PcForm>
        )}
      </Col>
    </Row>
  );
};

export default UpdateProduct;
