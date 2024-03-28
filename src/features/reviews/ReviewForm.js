import { useState } from "react";
import { Button, Offcanvas, OffcanvasHeader, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateReviewForm } from "../../utils/validateReviewForm";


const ReviewForm = ({ productId }) => {
    const [canvasOpen, setCanvasOpen] = useState(false);

    const handleSubmit = (values,{resetForm}) => {
        const review = {
            productId: parseInt(productId),
            rating: values.rating,
            author: values.author,
            text: values.reviewText
        };
        console.log(review);
        setCanvasOpen(false);
        resetForm();
    };

    return (
        <>
            <Button outline onClick={() => setCanvasOpen(true)}>
                Write a review
            </Button>
            <Offcanvas isOpen={canvasOpen} direction='end' style={{ padding: '12px 15px' }}>
                <OffcanvasHeader className='my-3' toggle={() => setCanvasOpen(false)}>Please write a review</OffcanvasHeader>
                <Formik
                    initialValues={{
                        rating: undefined,
                        author: '',
                        reviewText: ''
                    }}
                    onSubmit={handleSubmit}
                    validate={validateReviewForm}
                >
                    <Form>
                        <FormGroup>
                            <Label htmlFor='rating'>
                                What did you think of your latest purchase? Share your experience with others!
                            </Label>
                            <Field
                                name='rating'
                                as='select'
                                className='form-control'
                            >
                                <option>Select...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Field>
                            <ErrorMessage name='rating'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='author'>
                                Name
                            </Label>
                            <Field
                                name='author'
                                className='form-control'
                            />
                            <ErrorMessage name='author'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='review'>
                                Review
                            </Label>
                            <Field
                                className='form-control'
                                name='review'
                                as='textarea'
                                rows='3'
                            />
                            <div style={{ fontSize: '12px' }}>Write something that you think summarizes the experience in one sentence, and would be helpful to others.</div>
                        </FormGroup>
                        <Button type='submit'>
                            Submit review
                        </Button>
                    </Form>

                </Formik>
            </Offcanvas>

        </>
    )
};




export default ReviewForm;
