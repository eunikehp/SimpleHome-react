import { Row} from 'reactstrap';
import SubHeader from '../components/SubHeader';
import CartList from '../features/cart/CartList';


const CartPage = () => {

    return (
        <div className='page-container'>
            <SubHeader current='Order' />
            <h2 className='heading-secondary'>Shopping Cart</h2>
            <hr/>
            <Row>
                <CartList />
            </Row>
        </div>
    )
};

export default CartPage;
