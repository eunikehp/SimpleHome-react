import CarouselPage from "../components/sections/CarouselPage";
import HomeDescription from "../components/sections/HomeDescription";
import ShopByCategory from "../components/sections/ShopByCategory";
import Inspiration from "../components/sections/Inspiration";

const HomePage = () => {
  return (
    <div>
      <section>
        <CarouselPage/>
      </section>

      <div className="page-container">
        <HomeDescription />
        <ShopByCategory />
        <Inspiration />
      </div>
    </div>
  );
};

export default HomePage;
