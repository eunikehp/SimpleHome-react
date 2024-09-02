import { Col } from "reactstrap";
import CardItem from '../cart/CartItem';
import { useSelector } from "react-redux";
import { selectAllCart } from "./CartSlice";
import OrderSummary from "../../components/OrderSummary";

const CartList = () => {

    const cart = useSelector(selectAllCart);
    console.log('cart: ', cart);

    // eslint-disable-next-line no-lone-blocks
    {return (cart && cart.length > 0) ?
        <div className="cart-box">
        <div>
            {cart.map((item) => {
                return (
                    <div key={item.id}>
                        <CardItem item={item} />
                    </div>
                );
            })}
        </div>
        <div>
            <OrderSummary />
        </div>
        </div>
    :
    <p>
        There are no item selected yet.
    </p>
    }
}


export default CartList;