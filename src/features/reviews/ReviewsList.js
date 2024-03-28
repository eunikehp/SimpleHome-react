import Review from "./Review";
import { Col } from 'reactstrap';
import { selectReviewsByProductId } from './reviewsSlice';

const ReviewsList = ({ productId }) => {
    const reviews = selectReviewsByProductId(productId);

    if (reviews && reviews.length > 0) {
        return (
            <Col md='4' className='m-1'>
                <h4>Customer reviews</h4>
                {reviews.map((review) => {
                    return <Review key={review.id} review={review}/>;
                })}
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