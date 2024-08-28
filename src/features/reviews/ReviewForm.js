import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Offcanvas, OffcanvasHeader, FormGroup, Label} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateReviewForm } from "../../utils/validateReviewForm";
// import { addReview } from "./reviewsSlice";
import { postReview } from "./reviewsSlice";

const ReviewForm = ({ productId }) => {
    const [canvasOpen, setCanvasOpen] = useState(false);

    //dispatch / update review
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        const review = {
            productId: parseInt(productId),
            rating: values.rating,
            author: values.author,
            text: values.reviewText,
            date: new Date(Date.now()).toISOString() //dispatch this
        };
        console.log('review: ', review);
        //dispatch function and pass an action object(addReview),then pass new review object inside argument list
        // dispatch(addReview(review));
        dispatch(postReview(review));
        setCanvasOpen(false);
        resetForm();
    };

    return (
        <>
            <Button outline onClick={() => setCanvasOpen(true)} className="font-16">
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
                            <Label htmlFor='reviewText'>
                                Review
                            </Label>
                            <Field
                                className='form-control'
                                name='reviewText'
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
