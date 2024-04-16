import Review from "./Review";
import { Col } from 'reactstrap';
import { selectReviewsByProductId } from './reviewsSlice';
import ReviewForm from "./ReviewForm";
import { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const ReviewsList = ({ productId }) => {
    const reviews = useSelector(selectReviewsByProductId(productId));
    const [open, setOpen] = useState('');
    
    //error and loading
    const isLoading = useSelector((state) => state.reviews.isLoading);
    const errMsg = useSelector((state) => state.reviews.errMsg);
    if (isLoading) {
        return <Loading />;
    }
    if (errMsg) {
        return <Error errMsg={errMsg} />;
    }

    
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    if (reviews && reviews.length > 0) {
        return (
            <Col className='p-0' >
                <Accordion flush open={open} toggle={toggle}>
                    <AccordionItem>
                        <AccordionHeader targetId="1"><h5>Customer reviews</h5></AccordionHeader>
                        <AccordionBody accordionId="1">
                            {reviews.map((review) => {
                                return <Review key={review.id} review={review} />;
                            })}
                            <ReviewForm productId={productId} />
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </Col>
        );
    }

    return (
        <Col md='4' className='m-1'>
            There are no reviews yet.
        </Col>
    )
};

export default ReviewsList;