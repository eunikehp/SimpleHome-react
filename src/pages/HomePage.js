import CarouselPage from "../components/sections/CarouselPage";
import HomeDescription from "../components/sections/HomeDescription";
import ShopByCategory from "../components/sections/ShopByCategory";
import Inspiration from "../components/sections/Inspiration";

const HomePage = () => {
  return (
    <div>
      <div className="cover">
        <CarouselPage className="carousel-section" />
      </div>

      <div className="page-container">
        <HomeDescription />
        <ShopByCategory />
        <Inspiration />
      </div>
    </div>
  );
};

export default HomePage;
