import CarouselPage from "../components/sections/CarouselPage";
import Hero from "../components/sections/Hero";
import WhyChooseUs from "../components/sections/WhyChooseUse";
import ShopByCategory from "../components/sections/ShopByCategory";
import Inspiration from "../components/sections/Inspiration";

const HomePage = () => {
  return (
    <div>
      <section>
        <CarouselPage className='carousel-section'/>
      </section>
      
      <div className="page-container">
        <Hero />
        <WhyChooseUs />
        <ShopByCategory />
        <Inspiration />
      </div>
    </div>
  );
};

export default HomePage;
