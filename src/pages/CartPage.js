import { Container, Row, Col, Button } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import { useState } from 'react';
import OrderSummary from '../components/OrderSummary';
import CartList from '../features/cart/CartList';


const CartPage = () => {

    return (
        <Container>
            <SubHeader current='Order' />
            <h2>Shopping Cart</h2>
            <hr/>
            <Row>
                <Col md='8'>
                    <CartList />
                </Col>
                <Col md='4'>
                    <OrderSummary/>
                    {/* <Button>Empty cart</Button>
                    <Button>Check out</Button> */}
                </Col>
            </Row>
        </Container>
    )
};

export default CartPage;
