import ProductCard from "./ProductCard";
import { PRODUCTS } from "../../app/shared/PRODUCTS";
import { Col, Row } from 'reactstrap';

const ProductsList = () => {
    return (
        <Row className="ms-auto">
            {PRODUCTS.map((product) => {
                return (
                    <Col md='3' className="m-1" key={product.id}>
                        <ProductCard product={product}/>
                    </Col>
                )
            })}
        </Row>
    )
}

export default ProductsList;