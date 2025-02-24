/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import PcForm from "../../components/form/PcForm";
import PcInput from "../../components/form/pcInput";
import PcSelactInput from "../../components/form/PcSelectInput";
import PcTextarea from "../../components/form/PcTextarea";
import {
  productCategoriesOptions,
  productStockOptions,
} from "../../constants/createproduct.constants";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../redux/features/admin/productManagementApi";
import { TProduct, TResponse } from "../../types";

const UpdateProduct = () => {
  const { productId } = useParams();
  const { data: product } = useGetProductQuery(productId);
  const [updateProduct] = useUpdateProductMutation();
  const updateProductOnsubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Product...", {
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
  return (
    <Row justify="center">
      <Col xs={{ span: 24 }} sm={{ span: 12 }}>
        {product?.data && (
          <PcForm
            onSubmit={updateProductOnsubmit}
            defaultValues={productDefaultValues}
          >
            <PcInput type="text" name="name" label="Title:" />
            <PcInput type="text" name="brand" label="Brand:" />
            <PcInput type="number" name="price" label="Price:" />
            <PcSelactInput
              name="category"
              label="Category:"
              options={productCategoriesOptions}
              placeholder="Selact an categories:"
            />
            <PcInput type="url" name="image" label="Image url:" />
            <PcTextarea name="description" label="Description:" rows={4} />
            <PcInput type="number" name="quantity" label="Quantity:" />
            <PcSelactInput
              name="inStock"
              label="Stock:"
              options={productStockOptions}
              placeholder="Selact an option:"
            />
            <Button htmlType="submit" color="danger" variant="solid">
              Create Product
            </Button>
          </PcForm>
        )}
      </Col>
    </Row>
  );
};

export default UpdateProduct;
