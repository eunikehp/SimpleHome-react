import { Col, Button, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/CartSlice';

const ProductDetail = ({ product }) => {
    const { id, image, price, name, description, category, stockCount } = product;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const item = {
        id: id,
        name: name,
        image: image,
        price: price,
        category: category
        };
        console.log('item:', item);
        dispatch(addItem(item));
    }

    return (
        <Row>
            <Col md='6' className='me-1'>
                <img src={image} alt={name} style={{ width: '100%' }} />
            </Col>
            <Col md='5'>
                <Row>
                    <div className='fs-6 my-1' style={{ color: '#795548' }}>{category}</div>
                    <div className='mb-2' style={{ fontSize: '25px' }}>{name}</div>
                    <div className='mb-2 text-muted' style={{ fontSize: '20px' }}>€ {price}</div>
                    <Col>
                        <Button
                            block
                            className='mb-4'
                            style={{
                                backgroundColor: '#463F3A',
                                border: 'none',
                                padding: '10px 10px',
                                cursor: 'pointer'
                            }}
                            onClick={handleAddToCart}
                            ><FontAwesomeIcon
                                className='navbar-icon'
                                icon="fa-solid fa-cart-plus"
                            />Add to cart</Button>
                    </Col>
                    <Col>
                        <Button href='#' block className='mb-4' style={{ backgroundColor: '#ac2f8a', border: 'none', padding: '10px 10px' }}>♡ Add to my wishlist</Button>
                    </Col>
                    <div className='text-danger mb-3'>Stock: {stockCount}</div>
                    <h4>Product Information</h4>
                    <hr />
                    <div className='fs-6'>{description}</div>
                </Row>
            </Col>
        </Row >

    )
}

export default ProductDetail;