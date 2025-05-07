import BannerSlider from "../components/layout/BannerSlider";
import BestOffers from "../components/layout/BestOffers";
import ProductContainer from "../components/shered/ProductContainer";
import GetTouch from "../components/ui/GetTouch";
import Supporters from "../components/ui/Supporters";
import TopCategory from "../components/ui/TopCatefory";
import UserTestimonials from "../components/ui/UserTestimonials";

const Home = () => {
  return (
    <div style={{}}>
      <BannerSlider></BannerSlider>
      <TopCategory />
      <BestOffers></BestOffers>
      <ProductContainer></ProductContainer>
      <GetTouch></GetTouch>
      <Supporters />
      <UserTestimonials />
    </div>
  );
};

export default Home;
