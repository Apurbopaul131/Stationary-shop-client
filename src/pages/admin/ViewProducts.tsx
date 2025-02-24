/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useDeleteProductMutation,
  useGetAllproductQuery,
} from "../../redux/features/admin/productManagementApi";

import type { TableColumnsType } from "antd";
import { Button, Modal, Space, Table } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { TProduct } from "../../types";

//type for handle table
type TTableData = Pick<TProduct, "image" | "name"> & { key: string };

const ViewProducts = () => {
  //state for handle modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  //Get all product query in redux
  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetAllproductQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  //Delete product mutation in redux
  const [deleteProduct] = useDeleteProductMutation();

  //handle show confirm delete modal
  const showModal = () => {
    setIsModalOpen(true);
  };
  //handle actual product delete mutaion
  const handleOk = async (productId: string) => {
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
      const result = await deleteProduct(productId);
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
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
            <Button onClick={showModal} color="danger" variant="solid">
              Delete
            </Button>
            <Modal
              title="Are you want to delete?"
              open={isModalOpen}
              onOk={() => handleOk(record?.key)}
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
    (products?.data as TProduct[]).map(({ _id, image, name }) => ({
      key: _id,
      image,
      name,
    }));
  return (
    <div>
      <Table
        loading={isFetching && isLoading}
        columns={columns}
        dataSource={productsDataSource}
        pagination={false}
      />
      ;
    </div>
  );
};

export default ViewProducts;
