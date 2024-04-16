import { Container, Row} from 'reactstrap';
import SubHeader from '../components/SubHeader';
import CartList from '../features/cart/CartList';


const CartPage = () => {

    return (
        <Container className='content'>
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
