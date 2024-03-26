import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Button} from 'reactstrap';

const ProductCard = ({ product }) => {
    const { image, name, price } = product;
    return (
        <Card>
            <CardImg
                width='100%'
                height='auto'
                src={image}
                alt={name}
            />
            <CardBody>
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