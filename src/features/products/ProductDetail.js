import { Card, CardImg, CardBody, CardText, Col, CardTitle, CardSubtitle, Button, Row } from 'reactstrap';

const ProductDetail = ({ product }) => {
    const { image, price, name, description, category, stockCount } = product;

    return (
        <Col md='7' className='m-1'>
            <Card color="light" outline>
                <CardImg top src={image} alt={name} style={{ width: '100%' }} />
                <CardBody>
                    <CardText className='fs-6 mb-1' style={{ color: '#795548' }}>{category}</CardText>
                    <CardTitle style={{ fontSize: '25px' }}>{name}</CardTitle>
                    <CardSubtitle className='mb-2 text-muted' style={{ fontSize: '20px' }}>€ {price}</CardSubtitle>
                    <Button href='#' className='mb-3'>Add to cart</Button>
                    <div className='text-danger'>Stock: {stockCount}</div>
                    <CardText className='fs-6'>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProductDetail;