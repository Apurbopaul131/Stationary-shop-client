/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { TableColumnsType, TableProps } from "antd";
import { Button, Modal, Pagination, Space, Table } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import {
  useAcceptOrderMutation,
  useCancleOrderMutation,
  useGetAllOrderQuery,
} from "../../redux/features/admin/orderManagementApi";
import "../../styles/customTable.css";
import { TOrder, TResponse } from "../../types";

//type for handle table
// type TTableData = Pick<TOrder, "product" | "status" | "email"> & {
//   key: string;
// };
type TTableData = {
  key: string;
  product: string;
  status: string;
  email: string;
  transactionId: string;
};

const AdminViewOrders = () => {
  //state for handle modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  //state for handle pagination and filter
  //state for handle pagination and filtering
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<{ name: string; value: string }[]>([]);
  //Get all orders query hook in redux
  const {
    data: orders,
    isLoading,
    isFetching,
  } = useGetAllOrderQuery([...params, { name: "page", value: page }], {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  //take meta form product
  const metaData = orders?.meta;
  //Order mutation hook mutation in redux
  const [cancleOrder] = useCancleOrderMutation();
  const [acceptOrder] = useAcceptOrderMutation();
  //handle accept order pending => shipping
  const handleAcceptOrder = async (orderId: string) => {
    const toastId = toast.loading("Accept Order...", {
      style: {
        padding: "10px",
        borderRadius: "8px",
        color: "yellowgreen",
      },
      position: "top-center",
    });
    try {
      const result = (await acceptOrder(orderId)) as TResponse<TOrder>;
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
      } else {
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
  //handle show confirm delete modal
  const showModal = (orderId: string) => {
    setSelectedProductId(orderId);
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
        const result = await cancleOrder(selectedProductId);
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
        setSelectedProductId(null);
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
      title: "Product Title",
      dataIndex: "product",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Transaction Id",
      dataIndex: "transactionId",
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        { text: "Pending", value: "Pending" },
        { text: "Shipping", value: "Shipping" },
      ],
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => handleAcceptOrder(record?.key)}
            style={{ backgroundColor: "#FAAD14" }}
          >
            Accept Order
          </Button>
          <>
            <Button
              onClick={() => showModal(record?.key)}
              color="danger"
              variant="solid"
            >
              Cancle Order
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
  const orderDataSource: TTableData[] =
    orders?.data.length &&
    (orders?.data as TOrder[]).map(
      ({ _id, product, email, status, transaction }) => ({
        key: _id,
        product: product?.name,
        email,
        status,
        transactionId: transaction.id,
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
      console.log(filters?.status);
      filters?.status?.forEach((item) => {
        newParams.push({ name: "status", value: item as string });
      });
      setParams(newParams);
    }
  };
  return (
    <div>
      <Table
        scroll={{ x: "max-content" }}
        loading={isFetching && isLoading}
        columns={columns}
        dataSource={orderDataSource}
        pagination={false}
        onChange={onChange}
      />
      ;
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

export default AdminViewOrders;
