/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PcFileinput from "../../components/form/PcFileinput";
import PcForm from "../../components/form/PcForm";
import PcInput from "../../components/form/pcInput";
import PcSelactInput from "../../components/form/PcSelectInput";
import PcTextarea from "../../components/form/PcTextarea";
import {
  productCategoriesOptions,
  productStockOptions,
} from "../../constants/createproduct.constants";
import { useCreateProductMutation } from "../../redux/features/admin/productManagementApi";
import { createProductValidationSchmea } from "../../schemas/createProduct.schema";
import { TProduct, TResponse } from "../../types";
import { uploadImageToCloudinary } from "../../uitls/uploadImage";

const CreateProduct = () => {
  const [createProduct] = useCreateProductMutation();
  const createProductOnSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Product...", {
      style: {
        padding: "10px",
        borderRadius: "8px",
        color: "yellowgreen",
      },
      position: "top-center",
    });
    const imageUrl = await uploadImageToCloudinary(data?.image);
    const product = {
      name: data?.name,
      brand: data?.brand,
      price: /\./.test(data?.price) ? eval(data?.price) : Number(data?.price),
      category: data?.category,
      image: imageUrl
        ? imageUrl
        : "https://res.cloudinary.com/dvqqxighm/image/upload/v1740296407/y1qcncmveqgfavbvo5rn.jpg",
      description: data?.description,
      quantity: Number(data?.quantity),
      inStock: data?.inStock,
    };
    try {
      //call the mutaion function
      const result = (await createProduct(product)) as TResponse<TProduct>;
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
  return (
    <Row justify="center">
      <Col xs={{ span: 24 }} sm={{ span: 12 }}>
        <PcForm
          onSubmit={createProductOnSubmit}
          resolver={zodResolver(createProductValidationSchmea)}
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
          <PcFileinput name="image" label="Image Url:" />
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
      </Col>
    </Row>
  );
};

export default CreateProduct;
