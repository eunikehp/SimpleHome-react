import { REVIEWS } from "../../app/shared/REVIEWS";
import { createSlice } from "@reduxjs/toolkit";

//apply redux
const initialState = {
    reviewsArray: REVIEWS
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState
});

export const reviewsReducer = reviewsSlice.reducer;


export const selectReviewsByProductId = (productId) => (state) => {
    return state.reviews.reviewsArray.filter(
        (review) => review.productId === parseInt(productId)
    );
};

//old
// export const selectReviewsByProductId = (productId) => {
//     return REVIEWS.filter(
//         (review) => review.productId === parseInt(productId)
//     );
// };