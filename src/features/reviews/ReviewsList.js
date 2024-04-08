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

const ReviewsList = ({ productId }) => {
    const reviews = useSelector(selectReviewsByProductId(productId));

    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    if (reviews && reviews.length > 0) {
        return (
            <Col md='6' className='m-1'>
                <Accordion flush open={open} toggle={toggle}>
                    <AccordionItem>
                        <AccordionHeader targetId="1">Customer reviews</AccordionHeader>
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