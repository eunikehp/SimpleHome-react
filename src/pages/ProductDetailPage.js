import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductById } from '../features/products/productsSlice';
import ProductDetail from '../features/products/ProductDetail';
import ReviewsList from '../features/reviews/ReviewsList';
import SubHeader from '../components/SubHeader';

const ProductDetailPage = () => {
    const { productId } = useParams(); //useParams() will always parse URL parameters as strings. 
    const selectedProduct = useSelector(selectProductById(productId));
    console.log('selectedProduct: ', selectedProduct);

    return (
        <Container>
            <SubHeader current={selectedProduct.name} detail={true} />
            <Row>
                <ProductDetail product={selectedProduct}/>
                <ReviewsList productId={productId}/>
            </Row>
        </Container>
    )
}


export default ProductDetailPage;