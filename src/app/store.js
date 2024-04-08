import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../features/products/productsSlice';
import { reviewsReducer } from '../features/reviews/reviewsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsReducer
  },
});
