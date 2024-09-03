import { useNavigate } from "react-router-dom";
import { setCategory } from "../features/products/productsSlice";
import { useDispatch } from "react-redux";

const ShopMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = ["All", "Bed", "Dining Table", "Sofa"];

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    navigate(`/shop/${category === "All" ? "" : category}`); //Navigate to ShopPage with the selected category
  };

  return (
    <div >
      <ul className="shop-menu">
        {categories.map((category) => (
          <li key={category}>
            <div className="shop-menu-button" onClick={() => handleCategoryClick(category)}>{category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopMenu;
