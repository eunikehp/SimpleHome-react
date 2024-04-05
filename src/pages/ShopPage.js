import { Container, Row } from 'reactstrap';
import ProductsList from '../features/products/ProductsList';
import SubHeader from '../components/SubHeader';
import ShopMenu from '../components/ShopMenu';

const ShopPage = () => {

    return (
        <Container>
            <SubHeader current='Shop'/>
            {/* <ShopMenu/> */}
            <Row >
                <ProductsList /> 
            </Row>
        </Container>

    );
};

export default ShopPage;