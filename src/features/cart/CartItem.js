import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeItem, decrementQuantity, incrementQuantity } from "./CartSlice";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../favorites/FavoritesSlice";
import { useState } from "react";

const CartItem = ({ item }) => {
  const { id, image, name, price, category, quantity } = item;

  //replace button Love
  const [replaceButton, setReplaceButton] = useState(true);

  const dispatch = useDispatch();

  const handleAddWishlist = () => {
    dispatch(addFavorite(item));
    setReplaceButton(!replaceButton);
  };

  return (
    <div className="cart-detail">
      <img src={image} alt={name} />
      <div>
        <p className="card-category">{category}</p>
        <p className="card-title">{name}</p>
        <div className="cart-subdetail">
          <div className="add-item">
            <Button
              // pill
              onClick={() => dispatch(decrementQuantity(id))}
              className="cart-button"
            >
              -
            </Button>
            <div>
              {quantity} {quantity > 1 ? "items " : "item "}
            </div>
            <Button
              // pill
              onClick={() => dispatch(incrementQuantity(id))}
              className="cart-button"
            >
              +
            </Button>
          </div>
          <div className="cart-button-box">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(removeItem(id))}
            >
              <FontAwesomeIcon
                icon="fa-regular fa-trash-can"
                className="removeItem"
              />
            </div>
            <div>
              {replaceButton ? (
                <div style={{ cursor: "pointer" }} onClick={handleAddWishlist}>
                  <FontAwesomeIcon
                    icon="fa-regular fa-heart"
                    className="addFavorite"
                  />{" "}
                </div>
              ) : (
                <div style={{ alignItems: "end" }}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    className="addFavorite"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="cart-price" style={{ textAlign: "end" }}>
        € {price}
      </p>
    </div>
  );
};

export default CartItem;
