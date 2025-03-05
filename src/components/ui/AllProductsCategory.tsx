import { Row } from "antd";
import { TProduct } from "../../types";
import ProductCard from "../shered/ProductCard";

const AllProductsCategory = ({ products }: { products: TProduct[] }) => {
  return (
    <Row gutter={[16, 16]}>
      {products &&
        products
          .slice(0, 3)
          .map(({ _id, name, image, description, price }) => (
            <ProductCard
              key={_id}
              _id={_id}
              name={name}
              image={image}
              description={description}
              price={price}
            ></ProductCard>
          ))}
    </Row>
  );
};

export default AllProductsCategory;
