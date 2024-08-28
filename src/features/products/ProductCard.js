import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = ({ product }) => {
  const { id, image, name, price, category } = product;
  return (
      <Link to={`${id}`} style={{ textDecoration: "none" }}>
        <div className="product-card">
          <img
            width="100%"
            src={image}
            alt={name}
          />
          <div className="card-body">
            <div className="card-category">{category}</div>
            <div className="card-title">{name}</div>
            <div className="price">€ {price}</div>
            {/* <div href='#' >
                        <FontAwesomeIcon className='navbar-icon' icon="fa-solid fa-cart-plus" />
                    </div> */}
          </div>
        </div>
      </Link>
  );
};

export default ProductCard;
