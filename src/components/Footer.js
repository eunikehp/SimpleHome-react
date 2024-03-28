import { Container, Row, Col, List } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs='6' sm='5' lg={{size:3, offset: 1}}>
                        <h6>Location</h6>
                        <p>
                            Bronkhorststraat 30
                            <br />
                            2718 AT Den Haag, The Netherlands
                        </p>
                        <h6>Opening Hours</h6>
                        <p>
                            Monday - Saturday 10.00-18.00
                            <br />
                            Sunday 12.00-18.00
                        </p>
                    </Col>
                    <Col xs='6' sm='4' className='text-center'>
                        <h6 className= 'mb-0'>Contact us:</h6>
                        <a
                            role='button'
                            className='btn btn-link btn-sm'
                            href='tel:+31120334445'
                        >
                            <i className='fa fa-phone' /> (+31) 120 334 445
                        </a>
                        <a
                            role='button'
                            className='btn btn-link btn-sm'
                            href='mailto:hello@simplehome.nl'
                        >
                            <i className='fa fa-envelope-o' /> hello@simplehome.nl
                        </a>
                        <h6 className= 'mt-3 mb-1'>Follow us:</h6>
                        <a
                            className='btn btn-social-icon btn-instagram btn-xs'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook btn-xs'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter btn-xs'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google btn-xs'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col sm='3' className='text-center'>
                        <List type='unstyled' className='text-center'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </List>
                    </Col>
                    <p className='text-center'>2024 Simple Home. Site by Eunike Hedriani Pardede</p>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;