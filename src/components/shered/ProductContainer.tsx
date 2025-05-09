import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { TProduct } from "../../types";
import ProductCard from "./ProductCard";

const { Title } = Typography;
const ProductContainer = ({
  products,
  title,
  indicator,
}: {
  products: TProduct[];
  title: string;
  indicator?: string;
}) => {
  // const { data: products } = useGetAllproductQuery([{}]);
  return (
    <div style={{ margin: "2rem 0" }}>
      <Title
        level={2}
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {title}
      </Title>
      <Row gutter={[16, 16]}>
        {products &&
          (products as TProduct[])
            .slice(0, 4)
            .map(({ _id, name, image, description, price, rating }) => (
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
      {indicator === "all" && (
        <div style={{ textAlign: "center" }}>
          <Link to={"/products"}>
            <Button
              style={{ marginTop: "10px" }}
              color="danger"
              variant="solid"
            >
              See More
              <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductContainer;
