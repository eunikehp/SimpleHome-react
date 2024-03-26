import { Card, CardImg, CardBody, CardText, Col, CardTitle, CardSubtitle, Button } from 'reactstrap';

const ProductDetail = ({ product }) => {
    const { image, price, name, description, category } = product;
    
    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} style={{ width: '100%'}} />
                <CardBody>
                    <CardText style={{ fontSize: '13px', marginBottom: '0px', color: 'brown' }}>{category}</CardText>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle className='mb-2 text-muted'>€ {price}</CardSubtitle>
                    <Button href='#' >+</Button>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProductDetail;