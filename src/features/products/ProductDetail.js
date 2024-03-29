import { Card, CardImg, CardBody, CardText, Col, CardTitle, CardSubtitle, Button, Row } from 'reactstrap';

const ProductDetail = ({ product }) => {
    const { image, price, name, description, category, stockCount } = product;

    return (
        <Row>
            <Col md='6' className='me-1'>
                <img src={image} alt={name} style={{ width: '100%' }} />
            </Col>
            <Col md='5'>
                <Row>
                    <div className='fs-6 my-1' style={{ color: '#795548' }}>{category}</div>
                    <div className='mb-2' style={{ fontSize: '25px' }}>{name}</div>
                    <div className='mb-2 text-muted' style={{ fontSize: '20px' }}>€ {price}</div>
                    <Col>
                        <Button href='#' block className='mb-4' style={{backgroundColor:'#463F3A', border:'none',padding:'10px 10px'}}>Add to cart</Button>
                    </Col>
                    <Col>
                        <Button href='#' block className='mb-4' style={{backgroundColor:'#ac2f8a', border:'none',padding:'10px 10px'}}>♡ Add to my wishlist</Button>
                    </Col>
                    <div className='text-danger mb-3'>Stock: {stockCount}</div>
                    <h4>Product Information</h4>
                    <hr/>
                    <div className='fs-6'>{description}</div>
                </Row>
            </Col>
        </Row >
        
    )
}

export default ProductDetail;