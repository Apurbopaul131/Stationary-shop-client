import { Pagination, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { useGetMeOrdersQuery } from "../../redux/features/user/viewUserOrdersApi";
import "../../styles/customTable.css";
import { TOrder } from "../../types";
//type for handle table
type TTableData = Pick<TOrder, "product" | "status" | "email"> & {
  key: string;
};

const ViewOrders = () => {
  //state for handle pagination and filtering
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<{ name: string; value: string }[]>([]);
  const {
    data: orders,
    isFetching,
    isLoading,
  } = useGetMeOrdersQuery([...params, { name: "page", value: page }], {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  //take meta form product
  const metaData = orders?.meta;
  //columns for table
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
      title: "Status",
      dataIndex: "status",
      filters: [
        { text: "Pending", value: "Pending" },
        { text: "Shipping", value: "Shipping" },
      ],
    },
    {
      title: "Transaction Id",
      dataIndex: "transactionId",
    },
  ];
  //data source for table
  const orderDataSource: TTableData[] =
    orders?.data.length &&
    (orders?.data as TOrder[]).map(
      ({ _id, product, email, status, transaction }) => ({
        key: _id,
        product: product?.name,
        email,
        status,
        transactionId: transaction?.id,
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
      console.log(extra.action);
      setPage(1);

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

export default ViewOrders;
