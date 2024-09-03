import ProductsList from "../features/products/ProductsList";
import SubHeader from "../components/SubHeader";
import ShopMenu from "../components/ShopMenu";
import { useParams } from "react-router-dom";

const ShopPage = () => {
  const { category } = useParams();

  return (
    <div className="page-container">
      <SubHeader current="Shop" />
      <ShopMenu />
      <div className="flex-column">
        <h3 className="heading-tertiary">
          {category ? `${category} Products` : "All Products"}
        </h3>
        <ProductsList />
      </div>
    </div>
  );
};

export default ShopPage;
