import {
  BgColorsOutlined,
  EditOutlined,
  FileTextOutlined,
  LaptopOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const categories = [
  { name: "Writing", icon: <EditOutlined /> },
  { name: "Office Supplies", icon: <FileTextOutlined /> },
  { name: "Art Supplies", icon: <BgColorsOutlined /> },
  { name: "Educational", icon: <ReadOutlined /> },
  { name: "Technology", icon: <LaptopOutlined /> },
];

const TopCategory = () => {
  // const [category, setCategory] = useState("All");
  // const { data: products } = useGetAllproductQuery([
  //   { name: "category", value: category },
  // ]);
  // console.log(products);
  const navigate = useNavigate();
  const handleCategoryClick = (categoryName: string) => {
    navigate("/products", {
      state: { selectedCategory: categoryName },
    });

    // Add your logic here to handle the category click
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <Title level={2} style={{ textAlign: "center", fontWeight: "bold" }}>
        Top Category
      </Title>
      <Row gutter={[16, 16]}>
        {categories.map((cat, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={4}>
            <Card
              hoverable
              variant="borderless"
              style={{
                textAlign: "center",
                borderRadius: 12,
                backgroundColor: "#f5f5f5",
              }}
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div style={{ fontSize: "32px", color: "#FF4D4F" }}>
                {cat.icon}
              </div>
              <div style={{ marginTop: "0.5rem" }}>{cat.name}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TopCategory;
