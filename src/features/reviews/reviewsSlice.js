// import { REVIEWS } from "../../app/shared/REVIEWS";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import { baseUrl } from '../../app/shared/baseUrl';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';

//thunk
export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        // const response = await fetch (baseUrl + 'reviews');
        // if (!response.ok) {
        //     return Promise.reject('Unable to fetch, status:' + response.status)
        // }
        // const data = await response.json();
        // return data;

        const querySnapshot = await getDocs(collection(db, 'reviews'));
        const reviews = [];
        querySnapshot.forEach((doc) => {
            reviews.push(doc.data());
        });
        return reviews;
    }
);

//post Review
export const postReview = createAsyncThunk(
    'reviews/postReview',
    async (payload, { dispatch, getState }) => {
        setTimeout(() => {
            const { reviews } = getState();
            payload.date = new Date().toISOString();
            payload.id = reviews.reviewsArray.length;
            dispatch(addReview(payload));
        }, 2000);
    }
);



//apply redux
const initialState = {
    reviewsArray: [],
    isLoading: true,
    errMsg: ''
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
     },
     extraReducers: {
        [fetchReviews.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchReviews.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.reviewsArray = action.payload;
        },
        [fetchReviews.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [postReview.rejected]: (state, action) => {
            alert(
                'Your review could not be posted\nError: ' +
                    (action.error ? action.error.message : 'Fetch failed')
            );
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