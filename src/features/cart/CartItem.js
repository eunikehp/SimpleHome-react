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
      </div>
      <div className="cart-subdetail">
        <div className="flex-row" style={{ fontSize: "1.6rem" }}>
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

        <p style={{ textAlign: "end", fontSize: "1.6rem" }}>€ {price}</p>
        <div className="cart-button-box">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removeItem(id))}
          >
            <FontAwesomeIcon
              icon="fa-regular fa-trash-can"
              className="removeItem"
            />{" "}
            Remove
          </div>
          <div>
            {replaceButton ? (
              <div style={{ cursor: "pointer" }} onClick={handleAddWishlist}>
                <FontAwesomeIcon
                  icon="fa-regular fa-heart"
                  className="addFavorite"
                />{" "}
                Add to wish list
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
  );
};

export default CartItem;
