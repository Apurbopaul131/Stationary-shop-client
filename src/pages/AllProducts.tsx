import { Input, Select, Tabs, TabsProps, Typography } from "antd";
import { useState } from "react";
import { GetProps } from "react-redux";
import AllProductsCategory from "../components/ui/AllProductsCategory";
import { productCategoriesAllProducts } from "../constants/createproduct.constants";
import { useGetAllproductQuery } from "../redux/features/admin/productManagementApi";

const { Title } = Typography;
type TSearchProps = GetProps<typeof Input.Search>;
// const productFiterItems: TabsProps["items"] = [
//   { key: "1", label: "Tab 1", children: "Content of tab pane 1" },
//   { key: "2", label: "Tab 2", children: "Content of Tab Pane 2" },
//   { key: "3", label: "Tab 3", children: "Content of Tab Pane 3" },
// ];

const { Search } = Input;
const AllProducts = () => {
  const [sort, setSort] = useState("-createdAt");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("All");
  const [params, setParams] = useState<{ name: string; value: string }[]>([]);
  const { data: products } = useGetAllproductQuery([
    { name: "page", value: page },
    ...params,
  ]);

  const productFiterItems: TabsProps["items"] =
    productCategoriesAllProducts.map((category) => ({
      key: category,
      label: category,
      children: products?.data.length ? (
        <AllProductsCategory
          products={products?.data}
          meta={products?.meta}
          setPage={setPage}
          page={page}
        ></AllProductsCategory>
      ) : (
        <p>No data</p>
      ),
    }));
  const onSearch: TSearchProps["onSearch"] = (value) => {
    const queryItems = [
      { name: "sort", value: sort },
      { name: "searchTerm", value: value },
    ];
    if (category !== "All") {
      queryItems.push({ name: "category", value: category });
    }
    setParams(queryItems);
    setSearchTerm("");
  };
  const handleChange = (value: string) => {
    setSort(value);
    const queryItems = [
      { name: "sort", value: value },
      { name: "searchTerm", value: searchTerm },
    ];
    if (category !== "All") {
      queryItems.push({ name: "category", value: category });
    }
    setParams(queryItems);
  };
  const onChange = (key: string) => {
    setCategory(key);
    setPage(1);
    const queryItems = [
      { name: "sort", value: sort },
      { name: "searchTerm", value: searchTerm },
    ];
    if (key !== "All") {
      queryItems.push({ name: "category", value: key });
    }
    setParams(queryItems);
  };
  const handleSearchFieldChange = (value: string) => {
    setSearchTerm(value);
    const queryItems = [
      { name: "sort", value: sort },
      { name: "searchTerm", value: value },
    ];
    if (category !== "All") {
      queryItems.push({ name: "category", value: category });
    }
    setParams(queryItems);
  };
  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Title level={3}>EXPLORE ALL PRODUCTS</Title>
        <div style={{ display: "flex", gap: "16px" }}>
          <Search
            allowClear
            style={{ width: "300px" }}
            size="large"
            placeholder="input search text"
            value={searchTerm}
            onChange={(e) => handleSearchFieldChange(e.target.value)}
            onSearch={onSearch}
            enterButton
          />
          <Select
            size="large"
            placeholder="Select Price"
            onChange={handleChange}
            options={[
              { value: "price", label: "Low to high" },
              { value: "-price", label: "High to Low" },
            ]}
          />
        </div>
      </div>
      <Tabs
        defaultActiveKey="All"
        items={productFiterItems}
        onChange={onChange}
        indicator={{ size: (origin) => origin - 20, align: "center" }}
      />
    </div>
  );
};

export default AllProducts;
