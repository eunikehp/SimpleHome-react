import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { productsReducer } from '../features/products/productsSlice';
import { reviewsReducer } from '../features/reviews/reviewsSlice';
import { userReducer } from '../features/user/userSlice';
import logger from 'redux-logger';
import { cartReducer } from '../features/cart/CartSlice';
import { favoritesReducer } from '../features/favorites/FavoritesSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsReducer,
    user: userReducer,
    cart: cartReducer,
    favorites: favoritesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
