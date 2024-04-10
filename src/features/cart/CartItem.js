import { Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeItem, decrementQuantity, incrementQuantity } from './CartSlice';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../favorites/FavoritesSlice';

const CartItem = ({ item }) => {
    const { id, image, name, price, category, quantity } = item;

    const dispatch = useDispatch();

    return (
        <Row className='mb-2'>
            <Col md='3'>
                <img
                    width='100%'
                    height='auto'
                    src={image}
                    alt={name}
                />
            </Col>
            <Col md='3' type='unstyled'>
                <p style={{ fontSize: '13px', marginBottom: '0px', color: 'brown' }}>{category}</p>
                <p style={{ fontSize: '16px', color: 'black' }}>{name}</p>
            </Col>
            <Col >
                <Button pill onClick={() => dispatch(decrementQuantity(id))} style={{display: 'inline-block',backgroundColor:'#e1e1e0',border: 'none'}}>-</Button>
                <div md='4' className='mx-1' style={{ fontSize: '14px', display:'inline-block'}} >{quantity} {(quantity > 1) ? 'items ' : 'item '}</div>
                <Button pill onClick={() => dispatch(incrementQuantity(id))} style={{display:'inline-block',backgroundColor:'#e1e1e0', border:'none'}}>+</Button>
            </Col>
            <Col style={{fontSize: '13px'}}>
                <p md='2' className='mb-5 text-muted' style={{textAlign: 'end', fontSize: '16px'}}>€ {price}</p>
                <div 
                    style={{alignItems: 'end', cursor: 'pointer'}} 
                    onClick={() => dispatch(removeItem(id))}
                >
                    <FontAwesomeIcon 
                        icon="fa-regular fa-trash-can" 
                        className="removeItem"
                    /> Remove
                </div>
                <div 
                    style={{alignItems: 'end', cursor: 'pointer'}}
                    onClick={() => dispatch(addFavorite(item))}
                >
                    <FontAwesomeIcon 
                        icon="fa-regular fa-heart" 
                        className="addFavorite"
                    /> Add to wish list
                </div>
            </Col>
        </Row>
    )
}


export default CartItem;