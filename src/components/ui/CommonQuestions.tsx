import {
  BookOutlined,
  ClockCircleOutlined,
  EditOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

const questions = [
  {
    icon: <EditOutlined style={{ fontSize: "40px" }} />,
    title: "I need to cancel/change my order",
    linkText: "Get in touch",
  },
  {
    icon: <BookOutlined style={{ fontSize: "40px" }} />,
    title: "I need help personalizing my order",
    linkText: "Read more",
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: "40px" }} />,
    title: "How long will my order take to arrive?",
    linkText: "Read more",
  },
  {
    icon: <FileTextOutlined style={{ fontSize: "40px" }} />,
    title: "I need help with my wedding stationery",
    linkText: "Get in touch",
  },
];

const CommonQuestions = () => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Title level={2} style={{ textAlign: "center", fontWeight: "bold" }}>
        Our most common questions
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {questions.map((q, idx) => (
          <Col key={idx} xs={24} sm={12} md={6}>
            <Card
              variant="borderless"
              hoverable
              style={{
                borderRadius: 12,
                backgroundColor: "#f5f5f5",
                textAlign: "center",
              }}
            >
              <div>
                <div style={{ marginBottom: "1rem", color: "#FF4D4F" }}>
                  {q.icon}
                </div>
                <Paragraph style={{ fontSize: "16px", minHeight: "60px" }}>
                  {q.title}
                </Paragraph>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CommonQuestions;
