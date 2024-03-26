import { useState } from 'react';
import { Container, Row } from 'reactstrap';
import ProductsList from '../features/products/ProductsList';
import ProductDetail from '../features/products/ProductDetail';
// import { selectRandomProduct } from '../features/products/productsSlice';
import { selectProductById } from '../features/products/productsSlice';

const ShopPage = () => {
    const [productId, setProductId] = useState(0);
    const selectedProduct = selectProductById(productId);

    return (
        <Container>
            <Row >
                <ProductsList setProductId = {setProductId}/> 
            </Row>
            <Row>
                <ProductDetail product={selectedProduct} />
            </Row>
        </Container>

    );
};

export default ShopPage;