import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Button, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                    <Button href='#' size='sm'x style={{backgroundColor:'gray', border:'none'}}>+</Button>
                </CardBody>
            </Card>
        </Link>
    )
}


export default ProductCard;