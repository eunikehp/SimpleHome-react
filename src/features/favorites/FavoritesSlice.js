import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    favoritesArray: []
}

const favoritesSlice = createSlice ({
    name:'favorites',
    initialState,
    reducers: {
        addFavorite: (state,action) => {
            const itemInFav = state.favoritesArray.find((item) => item.id === action.payload.id)
            state.favoritesArray.push(action.payload)
        },
        removeFavorite: (state,action) => {
            const removeItemInFav = state.favoritesArray.filter((item) => item.id !== action.payload)
            state.favoritesArray = removeItemInFav
        }
    }
})


export const favoritesReducer = favoritesSlice.reducer;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectAllFavorites = (state) => {
    return state.favorites.favoritesArray;
}