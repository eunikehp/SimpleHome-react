import { Card, CardImg, CardTitle, CardSubtitle, CardBody, CardText, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeFavorite } from './FavoritesSlice';
import { addItem } from '../cart/CartSlice';
import { useDispatch } from 'react-redux';

const FavoriteItem = ({ item }) => {
    const { id, image, name, price, category } = item;

    const dispatch = useDispatch();

    return (
        <Card color="light" outline>
            <CardImg
                width='100%'
                height='auto'
                src={image}
                alt={name}
            />
            <CardBody type='unstyled'>
                <CardText style={{ fontSize: '13px', marginBottom: '0px', color: 'brown' }}>{category}</CardText>
                <CardTitle style={{ color: 'black' }}>{name}</CardTitle>
                <CardSubtitle
                    className='mb-2 text-muted'
                >€ {price}</CardSubtitle>
                <Row>
                    <Col>
                        <div style={{ alignItems: 'end', cursor: 'pointer' }} onClick={() => dispatch(removeFavorite(id))}>
                            <FontAwesomeIcon
                                icon="fa-regular fa-trash-can"
                                className="removeFavorite"
                            /> Remove
                        </div>
                    </Col>
                    <Col>
                        <div style={{ alignItems: 'end', cursor: 'pointer' }} onClick={() => dispatch(addItem(item))}>
                            <FontAwesomeIcon
                                icon="fa-solid fa-cart-plus"
                                className="addItem"
                            /> Add to Cart
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}


export default FavoriteItem;

