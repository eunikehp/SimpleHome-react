import { Alert } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/CartSlice";
import { addFavorite, removeFavorite } from "../favorites/FavoritesSlice";
import ReviewsList from "../reviews/ReviewsList";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductDetail = ({ product }) => {
  const { id, image, price, name, description, category, stockCount } = product;
  const { productId } = useParams();

  //notif wishlist and add to cart
  const [visible, setVisible] = useState(false);
  const [notif, setNotif] = useState(false);
  const onDismiss = () => setVisible(false);
  const onDismissNotif = () => setNotif(false);

  //replace button Love
  const [replaceButton, setReplaceButton] = useState(true);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      id: id,
      name: name,
      image: image,
      price: price,
      category: category,
    };
    console.log("item:", item);
    dispatch(addItem(item));
    setVisible(true);
  };

  const handleAddToFavorites = () => {
    let item = {
      id: id,
      name: name,
      image: image,
      price: price,
      category: category,
    };
    dispatch(addFavorite(item));
    setNotif(true);
    setReplaceButton(!replaceButton);
  };

  // const handleRemoveFavorites = () => {
  //     const item = {
  //         id: id,
  //         name: name,
  //         image: image,
  //         price: price,
  //         category: category
  //     };
  //     dispatch(removeFavorite(item));
  //     setReplaceButton(replaceButton);
  // }

  return (
    <div className="grid-col-2">
      <div className="product-image">
        <img src={image} alt={name} style={{ width: "100%" }} />
      </div>
      <div className="product-details">
        <div>
          <div className="product-category">{category}</div>
          <div className="product-title">{name}</div>
          <div className="product-price">€ {price}</div>
          <div className="detail-btn">
            <div className="btn-add-cart" onClick={handleAddToCart}>
              <FontAwesomeIcon
                className="navbar-icon"
                icon="fa-solid fa-cart-plus"
              />
              Add to cart
            </div>

            {replaceButton ? (
              <div className="btn-like" onClick={handleAddToFavorites}>
                <FontAwesomeIcon icon="fa-regular fa-heart" />
              </div>
            ) : (
              <div
                className="btn-dislike"
                // onClick={handleRemoveFavorites}
              >
                <FontAwesomeIcon icon="fa-solid fa-heart" />
              </div>
            )}
          </div>
        </div>
        <div className="ms-1 mt-1">
          <Alert fade isOpen={visible} toggle={onDismiss}>
            You just added 1 item to your cart.
          </Alert>
          <Alert fade isOpen={notif} toggle={onDismissNotif}>
            This item was saved to your wishlist.
          </Alert>
        </div>
        <div>
          <p>Stock: {stockCount}</p>
          <h3 className="subheading">Product Information</h3>
          <hr />
          <p >{description}</p>
          <hr />
          <ReviewsList productId={productId} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
