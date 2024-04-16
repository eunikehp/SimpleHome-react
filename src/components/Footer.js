import { Container, Row, Col, List } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row xs='2' sm='2' md='3'>
                    <Col >
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
                    <Col className='text-center'>
                        <h6 className='mb-0'>Contact us:</h6>
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
                        
                        <h6 className='mt-3 mb-2'>Follow us:</h6>
                        <a href='http://instagram.com/'
                            className="instagram social">
                            <FontAwesomeIcon icon='fa-brands fa-instagram' size='2x'/>
                        </a>{' '}
                        <a href='http://facebook.com/'
                            className="facebook social">
                            <FontAwesomeIcon icon='fa-brands fa-facebook' size='2x'/>
                        </a>{' '}
                        <a href='http://twitter.com/'
                            className="twitter social">
                            <FontAwesomeIcon icon='fa-brands fa-twitter' size='2x'/>
                        </a>{' '}
                        <a href='http://youtube.com/'
                            className="youtube social">
                            <FontAwesomeIcon icon='fa-brands fa-youtube' size='2x'/>
                        </a>
                    </Col>
                    <Col xs='12' sm='12' className='text-center'>
                        <List type='unstyled' className='text-center'>
                            <li className='mb-3 mt-3'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='mb-3'>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li className='mb-3'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className='mb-3'> 
                                <Link to='/faq'>FAQ</Link>
                            </li>
                        </List>
                    </Col>
                </Row>
                <p className='text-center'>2024 Simple Home. Site by Eunike Hedriani Pardede</p>
            </Container>
        </footer>
    )
};

export default Footer;