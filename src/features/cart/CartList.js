import { Row, Col } from "reactstrap";
import CardItem from '../cart/CartItem';
import { useSelector} from "react-redux";
import { selectAllCart } from "./CartSlice";

const CartList = () => {

    const cart = useSelector(selectAllCart);
    console.log('cart: ', cart)

    {return (cart && cart.length > 0) ? 
        <Row className="ms-auto">
            {cart.map((item) => {
                return (
                    <Col md='12' className="m-1" key={item.id}>
                        <CardItem item={item} />
                    </Col>
                );
            })}
        </Row>
    : 
        <Col md='6' className='m-1'>
            There are no item selected yet.
        </Col>
    }
}


export default CartList;