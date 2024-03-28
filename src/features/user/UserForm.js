import { useState } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import {
    Formik,
    Field,
    Form,
    ErrorMessage
} from 'formik';
import defaultAvatar from '../../app/assets/img/unicorn.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { validateUserLoginForm } from '../../utils/validateUserLoginForm';

const UserForm = () => {
    const [signinModal, setSigninModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);

    let currentUser = '';

    const handleSignin = (values, { resetForm }) => {
        const currentUser = {
            id: Date.now(),
            avatar: { defaultAvatar },
            username: values.username,
            password: values.password
        }
        console.log(currentUser);
        setSigninModal(false);
        resetForm();
    };

    const handleSignup = (values, { resetForm }) => {
        const newUser = {
            id: Date.now(),
            avatar: { defaultAvatar },
            email: values.email,
            username: values.username,
            name: values.name,
            password: values.password
        }
        console.log(newUser);
        setSignupModal(false);
        resetForm();
    };

    return (
        <>
            <span className='navbar-text ml-auto'>
                {currentUser ? (
                    <div style={{ width: '4rem', height: '4rem' }}>
                        <img
                            src={currentUser.avatar}
                            alt='user'
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                ) : (
                    <FontAwesomeIcon
                        className='navbar-icon'
                        icon="fa-solid fa-user"
                        onClick={() => setSigninModal(true)}
                    />
                )}
            </span>
            <Modal isOpen={signinModal}>
                <ModalHeader toggle={() => setSigninModal(false)}>
                    Sign In
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={handleSignin}
                        validate={validateUserLoginForm}
                    >
                        <Form >
                            <FormGroup col>
                                <Label htmlFor='username' md='2'>Username</Label>
                                <Field
                                    name='username'
                                    placeholder='Username'
                                    className='form-control'
                                />
                                <ErrorMessage name='username'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup col>
                                <Label htmlFor='password' md='2'>Password</Label>
                                <Field
                                    name='password'
                                    placeholder='Password'
                                    className='form-control'
                                />
                                <ErrorMessage name='password'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button className='mt-4 mb-2' active block type='submit'>Sign In</Button>
                            <div className='text-center'>New Customer? <span onClick={() => setSignupModal(true)}>Click Here</span></div>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>

            <Modal isOpen={signupModal} >
                <ModalHeader toggle={() => setSignupModal(false)}>
                    New Customer
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            email:'',
                            username: '',
                            name:'',
                            password: ''
                        }}
                        onSubmit={handleSignup}
                        validate={validateUserLoginForm}
                    >
                        <Form >
                            <FormGroup col>
                                <Label htmlFor='email' md='2'>Email</Label>
                                <Field
                                    name='email'
                                    placeholder='Insert your email'
                                    className='form-control'
                                />
                                <ErrorMessage name='email'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup col>
                                <Label htmlFor='name' md='2'>Name</Label>
                                <Field
                                    name='name'
                                    placeholder='Insert your name'
                                    className='form-control'
                                />
                                <ErrorMessage name='name'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup col>
                                <Label htmlFor='username' md='2'>Username</Label>
                                <Field
                                    name='username'
                                    placeholder='Create your username'
                                    className='form-control'
                                />
                                <ErrorMessage name='username'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup col>
                                <Label htmlFor='password' md='2'>Password</Label>
                                <Field
                                    name='password'
                                    placeholder='Password'
                                    className='form-control'
                                />
                                <ErrorMessage name='password'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button className='mt-4 mb-2' active block type='submit'>Create Account</Button>
                            <div className='text-center'>Have an account? <span onClick={() => setSigninModal(true)}>Click Here</span></div>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default UserForm;