import { Container, Row } from 'reactstrap';
import ProductsList from '../features/products/ProductsList';
import SubHeader from '../components/SubHeader';

const ShopPage = () => {

    return (
        <Container>
            <SubHeader current='Shop'/>
            <Row >
                <ProductsList /> 
            </Row>
        </Container>

    );
};

export default ShopPage;