import { Col, Button, Row, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/CartSlice';
import { addFavorite, removeFavorite } from '../favorites/FavoritesSlice';
import ReviewsList from '../reviews/ReviewsList';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ProductDetail = ({ product }) => {
    const { id, image, price, name, description, category, stockCount } = product;
    const { productId } = useParams();

    //notif wishlist and add to cart
    const [visible, setVisible] = useState(false);
    const [notif, setNotif] = useState(false);
    const onDismiss = () => setVisible(false);
    const onDismissNotif = () => setNotif(false);

    //replace button Love
    const [replaceButton, setReplaceButton] =useState(true);

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
        setVisible(true);
    }

    const handleAddToFavorites = () => {
        let item = {
            id: id,
            name: name,
            image: image,
            price: price,
            category: category
        };
        dispatch(addFavorite(item));
        setNotif(true);
        setReplaceButton(!replaceButton);
    }

    // const handleRemoveFavorites = () => {
    //     const item = {
    //         id: id,
    //         name: name,
    //         image: image,
    //         price: price,
    //         category: category
    //     };
    //     dispatch(removeFavorite(item));
    //     setReplaceButton(replaceButton);
    // }

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
                    <Col md='10'>
                        <Button
                            block
                            className='mb-1'
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
                    <Col md='2'>
                        {replaceButton ? <Button
                            block
                            className='mb-1'
                            style={{
                                backgroundColor: 'white',
                                border: '1px #ac2f8a solid',
                                color: 'black',
                                padding: '10px 10px'
                            }}
                            onClick={handleAddToFavorites}
                        ><FontAwesomeIcon icon="fa-regular fa-heart" /></Button> : 
                        <Button
                            block
                            className='mb-1'
                            style={{
                                backgroundColor: '#ac2f8a',
                                border: 'none',
                                padding: '10px 10px'
                            }}
                            // onClick={handleRemoveFavorites}
                        ><FontAwesomeIcon icon="fa-solid fa-heart" /></Button>}
                    </Col>
                </Row>
                <Row className='ms-1 mt-1'>
                    <Alert fade isOpen={visible} toggle={onDismiss}>
                        You just added 1 item to your cart.
                    </Alert>
                    <Alert fade isOpen={notif} toggle={onDismissNotif}>
                        This item was saved to your wishlist.
                    </Alert>
                </Row>
                <Row>
                    <div className='text-danger mb-3'>Stock: {stockCount}</div>
                    <h4>Product Information</h4>
                    <hr />
                    <div className='fs-6 mb-4'>{description}</div>
                    <hr/>
                    <ReviewsList productId={productId} />
                </Row>
            </Col>
        </Row >

    )
}

export default ProductDetail;