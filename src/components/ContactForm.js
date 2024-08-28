import { Button, Label, Col, FormGroup, Alert } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { validateContactForm } from '../utils/validateContactForm';
import { useState } from 'react';

const ContactForm = () => {
    //notif submit is successfull
    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);

    const handleSubmit= (values, {resetForm}) => {
        console.log('form values: ', values);
        console.log('in JSON format: ', JSON.stringify(values));
        setVisible(true);
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
            validate={validateContactForm}
        >
            <Form>
                <Col >
                    <FormGroup col>
                        <Label htmlFor='name' md='2'>
                            Name
                        </Label>
                        <Col >
                            <Field
                                className='form-control'
                                name='name'
                                placeholder='Insert your name'
                            />
                            <ErrorMessage name='name'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup col >
                        <Label htmlFor='email' md='2'>
                            Email
                        </Label>
                        <Col>
                            <Field
                                className='form-control'
                                name='email'
                                placeholder='Insert your email'
                            />
                            <ErrorMessage name='email'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
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
                        <Button active type='submit' className='mb-2'>Submit</Button>
                        <Alert fade isOpen={visible} toggle={onDismiss}>
                                Your message has been successfully sent.
                        </Alert>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
}

export default ContactForm;