import { Table, TableColumnsType } from "antd";
import "../../styles/customTable.css";
import { TOrder, TStatus } from "../../types";

//type for handle table
type TTableData = {
  key: string;
  product: string;
  email: string;
  status: TStatus;
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
      title: "Status",
      dataIndex: "status",
    },
  ];
  //data source for table
  const orderDataSource: TTableData[] = orders?.map(
    ({ _id, product, email, status }) => ({
      key: _id,
      product: product?.name,
      email,
      status,
    })
  );

  return (
    <Table
      className="custom-table"
      loading={isFetching && isLoading}
      columns={columns}
      dataSource={orderDataSource}
      pagination={false}
    />
  );
};

export default StaticOrderTable;
