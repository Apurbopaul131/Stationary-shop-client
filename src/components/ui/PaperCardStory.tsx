import { Typography } from "antd";

const { Title } = Typography;
const PaperCardStory = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#FEEAE9",
        marginTop: "2rem",
        marginBottom: "2rem",
        borderRadius: "5px",
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <p>PAPERCARD STORY</p>
      <Title level={1}>
        <i>We Belive that</i> STATIONAY <br /> <i>is more then pen and paper</i>
      </Title>
      <Title level={1}>
        <i>It’s a powerful way to make each day</i> <br /> NOTEWORTHY.
      </Title>
      <p>
        Founded in 2015, Papier invites magic into the everyday with premium{" "}
        <br />
        paper treasures for every desk. Whether setting out your wildest dreams{" "}
        <br />
        on a page or scribbling a to-do list to get you ready for the day –{" "}
        <br />
        stationery is a space to think, to connect, to plan, to celebrate.
      </p>
    </div>
  );
};

export default PaperCardStory;
