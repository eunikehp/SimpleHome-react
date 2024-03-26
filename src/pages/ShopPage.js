import { Container, Row, Button } from 'reactstrap';
import ProductsList from '../features/products/ProductsList';
import ProductDetail from '../features/products/ProductDetail';
import { selectRandomProduct } from '../features/products/productsSlice';


const ShopPage = () => {
    const selectedProduct = selectRandomProduct();
    return (
        <Container>
            <Row >
                <ProductsList/>
            </Row>
            <Row>
                <ProductDetail product={selectedProduct} />
            </Row>
        </Container>

    );
};

export default ShopPage;