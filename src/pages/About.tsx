import PaperCardContactContainer from "../components/ui/PaperCardContactContainer";
import PaperCardLoveContainer from "../components/ui/PaperCardLoveContainer";
import PaperCardStory from "../components/ui/PaperCardStory";

const About = () => {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <PaperCardStory />
      <PaperCardLoveContainer />
      <PaperCardContactContainer />
    </div>
  );
};

export default About;
