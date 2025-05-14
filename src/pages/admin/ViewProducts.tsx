/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteProductMutation,
  useGetAllproductQuery,
} from "../../redux/features/admin/productManagementApi";

import type { TableColumnsType, TableProps } from "antd";
import { Button, Modal, Pagination, Space, Table } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { productCategories } from "../../constants/createproduct.constants";
import "../../styles/customTable.css";
import { TProduct } from "../../types";
//type for handle table
type TTableData = Pick<
  TProduct,
  "image" | "name" | "category" | "price" | "quantity"
> & {
  key: string;
};

const ViewProducts = () => {
  //state for handle modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  //state for handle pagination and filtering
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<{ name: string; value: string }[]>([]);
  //Get all product query in redux

  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetAllproductQuery([...params, { name: "page", value: page }], {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  //Delete product mutation in redux
  const [deleteProduct] = useDeleteProductMutation();
  //take meta form product
  const metaData = products?.meta;
  //handle show confirm delete modal
  const showModal = (productId: string) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  //handle actual product delete mutaion
  const handleOk = async () => {
    if (selectedProductId) {
      setIsModalOpen(false);
      const toastId = toast.loading("Deleteing product...", {
        style: {
          padding: "10px",
          borderRadius: "8px",
          color: "yellowgreen",
        },
        position: "top-center",
      });
      try {
        const result = await deleteProduct(selectedProductId);
        if (result?.data) {
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
          setSelectedProductId(null);
        }
      } catch (err: any) {
        toast.error("Faild to delete product...", {
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
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Image",
      dataIndex: "image",
      render: (_, { image }) => {
        return (
          <>
            <img width={50} height={50} src={image} alt={image} />
          </>
        );
      },
    },
    {
      title: "Title",
      dataIndex: "name",

      // specify the condition of filtering result
      // here is that finding the name started with `value`
    },
    {
      title: "Category",
      dataIndex: "category",
      filters: productCategories.map((category) => ({
        text: category,
        value: category,
      })),
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (_, { price }) => {
        return <span>${price}</span>;
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`update/${record?.key}`}>
            <Button style={{ backgroundColor: "#FAAD14" }}>Update</Button>
          </Link>
          <>
            <Button
              onClick={() => showModal(record?.key)}
              color="danger"
              variant="solid"
            >
              Delete
            </Button>
            <Modal
              title="Are you want to cancle order?"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>If you are sure then press ok</p>
            </Modal>
          </>
        </Space>
      ),
    },
  ];
  const productsDataSource: TTableData[] =
    products?.data.length &&
    (products?.data as TProduct[]).map(
      ({ _id, image, name, category, price, quantity }) => ({
        key: _id,
        image,
        name,
        category,
        price,
        quantity,
      })
    );

  // ------------------------------
  // Filter Change Handler
  // ------------------------------
  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    const newParams: { name: string; value: string }[] = [];
    if (extra?.action === "filter") {
      setPage(1);

      filters?.category?.forEach((item) => {
        newParams.push({ name: "category", value: item as string });
      });
      setParams(newParams);
    }
  };
  // ------------------------------
  // Render Component
  // ------------------------------
  return (
    <div>
      <Table
        scroll={{ x: "max-content" }}
        loading={isFetching && isLoading}
        columns={columns}
        dataSource={productsDataSource}
        pagination={false}
        onChange={onChange}
      />
      ;{/* Pagination Control */}
      <Pagination
        style={{ marginTop: "10px", marginBottom: "10px", color: "red" }}
        align="end"
        pageSize={metaData?.limit}
        onChange={(value) => setPage(value)}
        total={metaData?.total}
        current={page}
      />
    </div>
  );
};

export default ViewProducts;
