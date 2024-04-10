import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from "../../app/shared/PRODUCTS";


//applying Redux
const initialState = {
    productsArray: PRODUCTS
};

const productsSlice = createSlice ({
    name: 'products',
    initialState,
});

export const productsReducer = productsSlice.reducer;


//slice
export const selectAllProducts = (state) => {
    return state.products.productsArray;
};

export const selectProductById = (id) => (state) => {
    return state.products.productsArray.find(
        (product) => product.id === parseInt(id)
    ); 
};


//old
// export const selectAllProducts = () => {
//     return PRODUCTS;
// };

// // export const selectRandomProduct = () => {
// //     return PRODUCTS[Math.floor(PRODUCTS.length * Math.random())];
// // };

// export const selectProductById = (id) => {
//     return PRODUCTS.find((product) => product.id === parseInt(id)) // convert id from string to integer
// }