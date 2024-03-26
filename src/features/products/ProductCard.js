import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Button} from 'reactstrap';

const ProductCard = (props) => {
    return (
        <Card>
            <CardImg
                width='100%'
                height='auto'
                src={props.product.image}
                alt={props.product.name}
            />
            <CardBody>
                <CardTitle>{props.product.name}</CardTitle>
                <CardSubtitle 
                    className='mb-2 text-muted'
                >€ {props.product.price}</CardSubtitle>
                <Button href='#' >+</Button>
            </CardBody>
        </Card>
    )
}


export default ProductCard;