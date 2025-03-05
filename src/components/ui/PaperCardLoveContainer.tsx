import { Row, Typography } from "antd";
import ImageOne from "../../assets/about-image/about_image1.jpg";
import ImageTwo from "../../assets/about-image/about_image2.jpg";
import ImageThree from "../../assets/about-image/about_image3.jpg";
import ImageFour from "../../assets/about-image/about_image4.jpg";
import PaperCardLove from "./PaperCardLove";
const { Title } = Typography;

const paperCardLoveObj = [
  {
    id: "1",
    title: "Ready to personalize",
    description:
      "Make your pages feel like you. Put a name, favourite quote or meaningful motto on the cover of your Papier pieces for free.",
    image: ImageOne,
  },
  {
    id: "2",
    title: "Premium paper",
    description:
      "Our paper is FSC-certified and sustainably sourced, with quality you can feel. Your words will glide across the page with ease.",
    image: ImageTwo,
  },
  {
    id: "3",
    title: "Original designs",
    description:
      "From bold and bright to subtle and soft, we have designs for every kind of desk. Choose prints painted in-house or artistic collabs.",
    image: ImageThree,
  },
  {
    id: "4",
    title: "Meaningful gifts",
    description:
      "Special pieces they’ll reach for daily. Gift a journal to help them reach their goals, or a notebook for their next great idea. ",
    image: ImageFour,
  },
];
const PaperCardLoveContainer = () => {
  return (
    <div style={{ marginBottom: "4rem" }}>
      <Title
        level={1}
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        Reasons to love PAPERCARD
      </Title>
      <Row gutter={[16, 32]}>
        {paperCardLoveObj.map((card) => (
          <PaperCardLove key={card.id} card={card}></PaperCardLove>
        ))}
      </Row>
    </div>
  );
};

export default PaperCardLoveContainer;
