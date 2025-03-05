import BannerSlider from "../components/layout/BannerSlider";
import BestOffers from "../components/layout/BestOffers";
import AppFooter from "../components/shered/AppFooter";
import ProductContainer from "../components/shered/ProductContainer";
import GetTouch from "../components/ui/GetTouch";

const Home = () => {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <BannerSlider></BannerSlider>
      <BestOffers></BestOffers>
      <ProductContainer></ProductContainer>
      <GetTouch></GetTouch>
      <AppFooter></AppFooter>
    </div>
  );
};

export default Home;
