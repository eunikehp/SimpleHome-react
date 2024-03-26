import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Button, CardText} from 'reactstrap';

const ProductCard = ({ product }) => {
    const { image, name, price, category } = product;
    return (
        <Card>
            <CardImg
                width='100%'
                height='auto'
                src={image}
                alt={name}
            />
            <CardBody>
                <CardText style={{fontSize: '13px', marginBottom: '0px', color:'brown'}}>{category}</CardText>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle 
                    className='mb-2 text-muted'
                >€ {price}</CardSubtitle>
                <Button href='#' >+</Button>
            </CardBody>
        </Card>
    )
}


export default ProductCard;