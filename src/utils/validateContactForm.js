export const validateContactForm = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 2) {
        errors.name = 'Must be at least 2 characters.';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }

    // const reg = /^\d+$/;
    // if (!reg.test(values.phoneNum)) {
    //     errors.phoneNum = 'The phone number should contain only numbers.';
    // }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
};