import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs='6' sm='5' lg={{size:3, offset: 1}}>
                        <h5>Location</h5>
                        <p>
                            Bronkhorststraat 30
                            <br />
                            2718 AT Den Haag, The Netherlands
                        </p>
                        <h5>Opening Hours</h5>
                        <p>
                            Monday - Saturday 10.00-18.00
                            <br />
                            Sunday 12.00-18.00
                        </p>
                    </Col>
                    <Col xs='6' sm='4' className='text-center'>
                        <h5>Contact us:</h5>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+31120334445'
                        >
                            <i className='fa fa-phone' /> (+31) 120 334 445
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:hello@simplehome.nl'
                        >
                            <i className='fa fa-envelope-o' /> hello@simplehome.nl
                        </a>
                        <h5>Follow us:</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col sm='3' className='text-center'>
                        <ul className='list-unstyled text-center'>Home
                            {/* <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/catalog'>Catalog</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li> */}
                        </ul>
                    </Col>
                    <div className='text-center'>2024 Simple Home. Site by Eunike Hedriani Pardede</div>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;