import { Table, TableColumnsType } from "antd";
import "../../styles/customTable.css";
import { TOrder, TStatus } from "../../types";

//type for handle table
type TTableData = {
  key: string;
  product: string;
  email: string;
  status: TStatus;
  transactionId: string;
};

const StaticOrderTable = ({
  orders,
  isLoading,
  isFetching,
}: {
  orders: TOrder[];
  isLoading: boolean;
  isFetching: boolean;
}) => {
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
    },
  ];
  //data source for table
  const orderDataSource: TTableData[] = orders?.map(
    ({ _id, product, email, status, transaction }) => ({
      key: _id,
      product: product?.name,
      email,
      status,
      transactionId: transaction.id,
    })
  );

  return (
    <Table
      loading={isFetching && isLoading}
      columns={columns}
      dataSource={orderDataSource}
      pagination={false}
      scroll={{ x: "max-content" }}
    />
  );
};

export default StaticOrderTable;
