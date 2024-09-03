import DiningTable from "../../app/assets/img/diningtable.jpg";
import Sofa from "../../app/assets/img/sofa.jpg";
import Bed from "../../app/assets/img/bed.jpg";
import {Link, useNavigate} from "react-router-dom";

const ShopByCategory = () => {
  const navigate = useNavigate();
  const categories = [
    { name: "Sofa", img: Sofa },
    { name: "Bed", img: Bed },
    { name: "Dining Table", img: DiningTable },
  ]

  return (
    <section className="flex-column">
      <div className="category-title">
        <h2 className="heading-secondary">Shop by Category</h2>
        <h3 className="heading-tertiary">
          Discover the Perfect Piece for Every Room
        </h3>
      </div>
      <ul className="category-list">
      {categories.map((cat) => (
          <li className="category-block" key={cat.name}>
            <Link
              className="category-link"
              to={`/shop/${cat.name}`}
              onClick={() => navigate(`/shop/${cat.name}`)}
            >
              <img className="category-item" src={cat.img} alt={cat.name} />
              <p>{cat.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShopByCategory;
