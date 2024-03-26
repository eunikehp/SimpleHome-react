import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectProductById } from '../features/products/productsSlice';
import ProductDetail from '../features/products/ProductDetail';

const ProductDetailPage = () => {
    const { productId } = useParams(); //useParams() will always parse URL parameters as strings. 
    const selectedProduct = selectProductById(productId);

    return (
        <Container>
            <Row>
                <ProductDetail product={selectedProduct}/>
            </Row>
        </Container>
    )
}


export default ProductDetailPage;