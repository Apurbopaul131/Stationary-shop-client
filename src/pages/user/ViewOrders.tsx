import { Table, TableColumnsType } from "antd";
import { useGetMeOrdersQuery } from "../../redux/features/user/viewUserOrdersApi";
import "../../styles/customTable.css";
import { TOrder } from "../../types";
//type for handle table
type TTableData = Pick<TOrder, "product" | "status" | "email"> & {
  key: string;
};
const ViewOrders = () => {
  const {
    data: orders,
    isFetching,
    isLoading,
  } = useGetMeOrdersQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

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
    },
  ];
  //data source for table
  const orderDataSource: TTableData[] =
    orders?.data.length &&
    (orders?.data as TOrder[]).map(({ _id, product, email, status }) => ({
      key: _id,
      product: product?.name,
      email,
      status,
    }));
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

export default ViewOrders;
