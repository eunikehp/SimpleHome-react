import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartArray: []
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log('addItem action.payload: ', action.payload);
            console.log('addItem state.cartArray: ', state.cartArray);
            const itemInCart = state.cartArray.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cartArray.push({...action.payload, quantity:1 });
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cartArray.filter((item) => item.id !== action.payload);
            state.cartArray = removeItem;
        },
        incrementQuantity: (state, action) => {
            const item= state.cartArray.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state,action) => {
            const item = state.cartArray.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        }
    }

})

export const cartReducer = cartSlice.reducer;

export const { addItem,removeItem, decrementQuantity,incrementQuantity } = cartSlice.actions;

export const selectAllCart = (state) => {
    return state.cart.cartArray;
}