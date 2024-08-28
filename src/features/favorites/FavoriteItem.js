import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Col,
  Row,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeFavorite } from "./FavoritesSlice";
import { addItem } from "../cart/CartSlice";
import { useDispatch } from "react-redux";

const FavoriteItem = ({ item }) => {
  const { id, image, name, price, category } = item;

  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img
        width="100%"
        height="200px"
        object-fit="cover"
        src={image}
        alt={name}
      />
      <div className="card-body">
        <div className="card-category">{category}</div>
        <div className="card-title">{name}</div>
        <div className="price">€ {price}</div>
        <div className="grid-col-2">
          <div
            className="card-button"
            onClick={() => dispatch(removeFavorite(id))}
          >
            <FontAwesomeIcon
              icon="fa-regular fa-trash-can"
              className="removeFavorite"
            />{" "}
            Remove
          </div>
          <div className="card-button" onClick={() => dispatch(addItem(item))}>
            <FontAwesomeIcon icon="fa-solid fa-cart-plus" className="addItem" />{" "}
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
