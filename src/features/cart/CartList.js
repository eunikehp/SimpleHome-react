import { Row, Col } from "reactstrap";
import CardItem from '../cart/CartItem';
import { useSelector } from "react-redux";
import { selectAllCart } from "./CartSlice";
import OrderSummary from "../../components/OrderSummary";

const CartList = () => {

    const cart = useSelector(selectAllCart);
    console.log('cart: ', cart);

    {return (cart && cart.length > 0) ?
        <>
        <Col md='8' >
            {cart.map((item) => {
                return (
                    <Col className="m-1" key={item.id}>
                        <CardItem item={item} />
                    </Col>
                );
            })}
        </Col>
        <Col md='4'>
            <OrderSummary />
        </Col>
        </>
    :
    <Col md='6' className='m-1'>
        There are no item selected yet.
    </Col>
    }
}


export default CartList;