import Review from "./Review";
import { Col } from 'reactstrap';
import { selectReviewsByProductId } from './reviewsSlice';
import ReviewForm from "./ReviewForm";

const ReviewsList = ({ productId }) => {
    const reviews = selectReviewsByProductId(productId);

    if (reviews && reviews.length > 0) {
        return (
            <Col md='4' className='m-1'>
                <h3>Customer reviews</h3>
                {reviews.map((review) => {
                    return <Review key={review.id} review={review}/>;
                })}
                <ReviewForm productId={productId}/>
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