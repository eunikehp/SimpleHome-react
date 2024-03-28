import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact' />
            <Row className='text-center'>
                <Col>
                    <h3 className='mb-1'>Contact us</h3>
                    <a
                        role='button'
                        className='btn btn-link btn-sm'
                        href='tel:+31120334445'
                    >
                        <i className='fa fa-phone' /> (+31) 120 334 445
                    </a> /
                    <a
                        role='button'
                        className='btn btn-link btn-sm'
                        href='mailto:hello@simplehome.nl'
                    >
                        <i className='fa fa-envelope-o' /> hello@simplehome.nl
                    </a>
                    <p>or use the contact form below and we'll try to reply you as soon as possible.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs='10' md='8' lg='6' className='p-4' style={{border: '1px solid lightgray'}}>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
