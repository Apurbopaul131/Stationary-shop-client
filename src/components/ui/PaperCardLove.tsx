import { Col, Typography } from "antd";

const { Title } = Typography;
const PaperCardLove = ({
  card,
}: {
  card: { id: string; title: string; description: string; image: string };
}) => {
  return (
    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
      <img
        src={card.image}
        style={{ width: "100%", height: "600px" }}
        alt="About-image"
      />
      <Title level={3}>{card.title}</Title>
      <p>{card.description}</p>
    </Col>
  );
};

export default PaperCardLove;
