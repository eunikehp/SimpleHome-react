import ProductCard from "./ProductCard";
import { selectProductByCategory } from "./productsSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const ProductsList = () => {
  const { category } = useParams(); //Get the category from URL

  const products = useSelector((state) =>
    selectProductByCategory(state, category || "All")
  );

  //error and loading
  const isLoading = useSelector((state) => state.products.isLoading);
  const errMsg = useSelector((state) => state.products.errMsg);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (errMsg) {
    return (
      <div>
        <Error errMsg={errMsg} />
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
      ;
    </div>
  );
};

export default ProductsList;
