import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Button, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCard = ({ product }) => {
    const { id, image, name, price, category } = product;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg
                    width='100%'
                    height='auto'
                    src={image}
                    alt={name}
                />
                <CardBody type='unstyled'>
                    <CardText style={{ fontSize: '13px', marginBottom: '0px', color: 'brown' }}>{category}</CardText>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle
                        className='mb-2 text-muted'
                    >€ {price}</CardSubtitle>
                    <Button href='#' size='sm' style={{backgroundColor:'gray', border:'none'}}>
                        <FontAwesomeIcon className='navbar-icon' icon="fa-solid fa-cart-plus" />
                    </Button>
                </CardBody>
            </Card>
        </Link>
    )
}


export default ProductCard;