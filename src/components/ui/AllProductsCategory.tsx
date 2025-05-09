import { Pagination, Row } from "antd";
import { TProduct } from "../../types";
import ProductCard from "../shered/ProductCard";

const AllProductsCategory = ({
  products,
  meta,
  setPage,
  page,
}: {
  products: TProduct[];
  meta: { page: number; limit: number; total: number; totalPage: number };
  setPage: (value: number) => void;
  page: number;
}) => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {products &&
          products.map(({ _id, name, image, description, price, rating }) => (
            <ProductCard
              key={_id}
              _id={_id}
              name={name}
              image={image}
              description={description}
              price={price}
              rating={rating}
            ></ProductCard>
          ))}
      </Row>
      <Pagination
        style={{ marginTop: "10px", marginBottom: "10px" }}
        align="end"
        pageSize={meta?.limit}
        onChange={(value) => setPage(value)}
        total={meta?.total}
        current={page}
      />
    </div>
  );
};

export default AllProductsCategory;
