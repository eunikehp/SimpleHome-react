import { Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { selectAllFavorites } from "./FavoritesSlice";
import FavoriteItem from "./FavoriteItem";

const FavoritesList = () => {
  const favorites = useSelector(selectAllFavorites);

  return favorites && favorites.length > 0 ? (
    <Row className="ms-auto">
      {favorites.map((item) => {
        return (
          <Col md="3" className="m-1" key={item.id}>
            <FavoriteItem item={item} />
          </Col>
        );
      })}
    </Row>
  ) : (
    <Col md="6" className="m-1">
      There are no item selected yet.
    </Col>
  );
};

export default FavoritesList;
