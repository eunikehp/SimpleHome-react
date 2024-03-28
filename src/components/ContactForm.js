import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Form, Field} from 'formik';

const ContactForm = () => {
    const handleSubmit= (values, {resetForm}) => {
        console.log('form values: ', values);
        console.log('in JSON format: ', JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                subject: '',
                message: ''
            }}
            onSubmit= {handleSubmit}
        >
            <Form>
                <Col>
                    <FormGroup col>
                        <Label htmlFor='name' md='2'>
                            Name
                        </Label>
                        <Col>
                            <Field
                                className='form-control'
                                name='name'
                                placeholder='Insert your name'
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup col>
                        <Label htmlFor='email' md='2'>
                            Email
                        </Label>
                        <Col>
                            <Field
                                className='form-control'
                                name='email'
                                placeholder='Insert your email'
                            />
                        </Col>
                    </FormGroup>
                </Col>
                <FormGroup>
                    <Label htmlFor='subject' md='2'>
                        Subject
                    </Label>
                    <Col>
                        <Field
                            className='form-control'
                            name='subject'
                            placeholder='Insert your subject'
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='message' md='2'>
                        Message
                    </Label>
                    <Col>
                        <Field
                            className='form-control'
                            name='message'
                            placeholder='Insert your message'
                            as='textarea'
                            rows='6'
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col>
                        <Button type='submit'>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
}

export default ContactForm;