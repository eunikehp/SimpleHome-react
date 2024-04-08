import { REVIEWS } from "../../app/shared/REVIEWS";
import { createSlice } from "@reduxjs/toolkit";

//apply redux
const initialState = {
    reviewsArray: REVIEWS
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) => {
            console.log('addReview action.payload: ', action.payload);
            console.log('addReview state.reviewsArray: ', state.reviewsArray);
            const newReview = {
                id: state.reviewsArray.length + 1,
                ...action.payload
            }
            state.reviewsArray.push(newReview);
        }
     }
});

export const reviewsReducer = reviewsSlice.reducer;

//action creator is a function that creates and returns an action object
//destructure the addReview action creator function from reviewsSlice.action
export const { addReview } = reviewsSlice.actions;


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