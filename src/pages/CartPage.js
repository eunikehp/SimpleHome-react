import { Container, Row, Col, Button } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import OrderSummary from '../components/OrderSummary';
import CartList from '../features/cart/CartList';


const CartPage = () => {

    return (
        <Container>
            <SubHeader current='Order' />
            <h2>Shopping Cart</h2>
            <hr/>
            <Row>
                <CartList />
            </Row>
        </Container>
    )
};

export default CartPage;
