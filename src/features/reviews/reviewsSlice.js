import { REVIEWS } from "../../app/shared/REVIEWS";

export const selectReviewsByProductId = (productId) => {
    return REVIEWS.filter(
        (review) => review.productId === parseInt(productId)
    );
};