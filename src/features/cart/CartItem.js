import { Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeItem, decrementQuantity, incrementQuantity } from './CartSlice';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../favorites/FavoritesSlice';
import { useState } from 'react';

const CartItem = ({ item }) => {
    const { id, image, name, price, category, quantity } = item;

    //replace button Love
    const [replaceButton, setReplaceButton] = useState(true);

    const dispatch = useDispatch();

    const handleAddWishlist = () => {
        dispatch(addFavorite(item));
        setReplaceButton(!replaceButton);
    }


    return (
        <Row className='mb-2'>
            <Col md='3'>
                <img
                    max-width='100%'
                    height='120px'
                    object-fit='cover'
                    src={image}
                    alt={name}
                />
            </Col>
            <Col md='3' type='unstyled'>
                <p style={{ fontSize: '13px', marginBottom: '0px', color: 'brown' }}>{category}</p>
                <p style={{ fontSize: '16px', color: 'black' }}>{name}</p>
            </Col>
            <Col >
                <Button pill onClick={() => dispatch(decrementQuantity(id))} style={{ display: 'inline-block', backgroundColor: '#e1e1e0', border: 'none' }}>-</Button>
                <div md='4' className='mx-1' style={{ fontSize: '14px', display: 'inline-block' }} >{quantity} {(quantity > 1) ? 'items ' : 'item '}</div>
                <Button pill onClick={() => dispatch(incrementQuantity(id))} style={{ display: 'inline-block', backgroundColor: '#e1e1e0', border: 'none' }}>+</Button>
            </Col>
            <Col style={{ fontSize: '13px' }}>
                <p md='2' className='mb-5 text-muted' style={{ textAlign: 'end', fontSize: '16px' }}>€ {price}</p>
                <div
                    style={{ alignItems: 'end', cursor: 'pointer' }}
                    onClick={() => dispatch(removeItem(id))}
                >
                    <FontAwesomeIcon
                        icon="fa-regular fa-trash-can"
                        className="removeItem"
                    /> Remove
                </div>
                <Row>
                    {replaceButton ?
                        <div
                            style={{ alignItems: 'end', cursor: 'pointer' }}
                            onClick={handleAddWishlist}
                        >
                            <FontAwesomeIcon
                                icon="fa-regular fa-heart"
                                className="addFavorite"
                            /> Add to wish list
                        </div>
                        : <div
                            style={{ alignItems: 'end'}}
                        >
                            <FontAwesomeIcon
                                icon="fa-solid fa-heart"
                                className="addFavorite"
                            />
                        </div>
                    }
                </Row>


            </Col>
        </Row>
    )
}


export default CartItem;