import { useSelector } from 'react-redux';
import { Col, Row, Button,Container } from 'reactstrap';
import { selectAllCart } from '../features/cart/CartSlice';

const OrderSummary = () => {
    const cart = useSelector(selectAllCart)

    const getTotal = () => {
        let totalQuantity = 0;
        let subTotal = 0;
        let totalAmount = 0;
        let postageCost = 12;

        cart.forEach(item => {
            totalQuantity += item.quantity
            subTotal += item.price * item.quantity
            totalAmount = subTotal + postageCost
        });
        return {subTotal, totalQuantity, postageCost, totalAmount}
    }
    return (
        <Container className='pt-3' style={{backgroundColor:'#F4F3EE'}}>
            <Row>
                <h4>Order Summary</h4>
            </Row>
            <Row className='mb-5'>
                <div>Total ({getTotal().totalQuantity} {(getTotal().totalQuantity > 1) ? 'items' : 'item'})</div>
                <Col md='9'>
                    <div>Subtotal </div>
                </Col>
                <Col md='3' >
                    <div >€ {getTotal().subTotal}</div>
                </Col>
            </Row>
            <Row>
                <Col md='9'>
                    Postage cost
                </Col>
                <Col md='3'>
                    € {getTotal().postageCost}
                </Col>
            </Row>
            <hr/>
            <Row className='mb-3'>
                <Col md='9'>
                    Total amount
                </Col>
                <Col md='3'>
                    € {getTotal().totalAmount}
                </Col>
            </Row>
            <Row style={{alignItems:'center'}}>
                <Button className='mb-3' style={{ backgroundColor:'#463F3A', border: 'none'}}>Check Out</Button>
            </Row>
        </Container>
    )
}

export default OrderSummary;