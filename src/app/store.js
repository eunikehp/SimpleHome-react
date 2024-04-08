import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { productsReducer } from '../features/products/productsSlice';
import { reviewsReducer } from '../features/reviews/reviewsSlice';
import { userReducer } from '../features/user/userSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
