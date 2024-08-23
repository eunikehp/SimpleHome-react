import DiningTable from "../../app/assets/img/diningtable.jpg";
import Sofa from "../../app/assets/img/sofa.jpg";
import Bed from "../../app/assets/img/bed.jpg";

const ShopByCategory = () => {
    return (
        <section className="flex-column">
          <div className="category-title">
            <h2 className="heading-secondary">Shop by Category</h2>
            <h3 className="heading-tertiary">Discover the Perfect Piece for Every Room</h3>
          </div>
          <ul className="category-list">
            <li className="category-block">
              <img className="category-item" src={Sofa} alt="sofa" />
              <p>Sofa</p>
            </li>
            <li className="category-block">
              <img className="category-item" src={Bed} alt="bed" />
              <p>Bed</p>
            </li>
            <li className="category-block">
              <img
                className="category-item"
                src={DiningTable}
                alt="dining-table"
              />
              <p>Dining Table</p>
            </li>
          </ul>
        </section>
    );
};

export default ShopByCategory;