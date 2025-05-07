import { FormatPainterOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Student, DU",
    feedback:
      "This platform helped me sell my old books and electronics so easily. Loved the experience!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mehedi Hasan",
    role: "Freelancer",
    feedback:
      "The posting process was smooth, and I got buyers within a few hours. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sharmin Akter",
    role: "Teacher",
    feedback:
      "Great user dashboard and wishlist feature. I found exactly what I needed at a great price.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const UserTestimonials = () => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Title level={2} style={{ textAlign: "center", fontWeight: "bold" }}>
        What Our Users Say ?
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {testimonials.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              variant="borderless"
              hoverable
              style={{
                borderRadius: 12,
                minHeight: "260px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#f5f5f5",
              }}
            >
              <div style={{ color: "#FF4D4F", fontSize: 24 }}>
                <FormatPainterOutlined />
              </div>
              <Paragraph italic style={{ margin: "1rem 0" }}>
                “{item.feedback}”
              </Paragraph>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Avatar src={item.avatar} size={48} />
                <div>
                  <Text strong>{item.name}</Text>
                  <br />
                  <Text type="secondary" style={{ fontSize: "14px" }}>
                    {item.role}
                  </Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserTestimonials;
