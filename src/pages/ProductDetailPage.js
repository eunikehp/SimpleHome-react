import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectProductById } from '../features/products/productsSlice';
import ProductDetail from '../features/products/ProductDetail';
import ReviewsList from '../features/reviews/ReviewsList';

const ProductDetailPage = () => {
    const { productId } = useParams(); //useParams() will always parse URL parameters as strings. 
    const selectedProduct = selectProductById(productId);

    return (
        <Container>
            <Row>
                <ProductDetail product={selectedProduct}/>
                <ReviewsList productId={productId}/>
            </Row>
        </Container>
    )
}


export default ProductDetailPage;