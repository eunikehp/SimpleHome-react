import { useSelector } from "react-redux";
import { selectAllFavorites } from "./FavoritesSlice";
import FavoriteItem from "./FavoriteItem";

const FavoritesList = () => {
  const favorites = useSelector(selectAllFavorites);

  return favorites && favorites.length > 0 ? (
    <div className="product-list">
      {favorites.map((item) => {
        return (
          <div key={item.id}>
            <FavoriteItem item={item} />
          </div>
        );
      })}
    </div>
  ) : (
    <p>
      There are no item selected yet.
    </p>
  );
};

export default FavoritesList;
