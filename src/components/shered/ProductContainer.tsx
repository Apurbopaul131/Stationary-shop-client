import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { useGetAllproductQuery } from "../../redux/features/admin/productManagementApi";
import { TProduct } from "../../types";
import ProductCard from "./ProductCard";

const { Title } = Typography;
const ProductContainer = () => {
  const { data: products } = useGetAllproductQuery([{}]);
  return (
    <div style={{ margin: "4rem 0" }}>
      <Title
        level={1}
        style={{
          fontWeight: "bold",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        All Products
      </Title>
      <Row gutter={[16, 16]}>
        {products?.data &&
          (products?.data as TProduct[])
            .slice(0, 4)
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
      <div style={{ textAlign: "center" }}>
        <Link to={"/products"}>
          <Button style={{ marginTop: "10px" }} color="danger" variant="solid">
            See More
            <ArrowRightOutlined />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductContainer;
