import ProductCard from "./ProductCard";
import { Col, Row } from 'reactstrap';
import { selectAllProducts } from "./productsSlice";

// const ProductsList = ({ setProductId }) => {
const ProductsList = () => {
    const products = selectAllProducts();
    
    return (
        <Row className="ms-auto">
            {products.map((product) => {
                return (
                    <Col 
                        md='2' 
                        className="m-1" 
                        key={product.id}
                        // onClick={() => setProductId(product.id)}
                    >
                        <ProductCard product={product}/>
                    </Col>
                );
            })}
        </Row>
    );
};

export default ProductsList;