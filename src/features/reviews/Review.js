import { formatDate } from '../../utils/formatDate';


const Review = ({ review }) => {
    const { author, date, text: reviewText, rating} = review;
    
    return (
        <p>
            {rating}/5 stars
            <br />
            {reviewText}
            <br />
            {author} - {formatDate(date)}
            <hr/>
        </p>
    );
};

export default Review;