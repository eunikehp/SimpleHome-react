import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { PRODUCTS } from "../../app/shared/PRODUCTS";
// import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from "../../utils/mapImageURL";
import { db } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";

//thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    // const response = await fetch(baseUrl + 'products');
    // if (!response.ok) {
    //     return Promise.reject('Unable to fetch, status:' + response.status)
    // }
    // const data = await response.json();
    // return data;

    //Update fetch calls to firebase/firestore API calls
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    return products;
  }
);

//applying Redux
const initialState = {
  productsArray: [], //initial state after thunk
  selectedCategory: "All",
  isLoading: true,
  errMsg: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.productsArray = mapImageURL(action.payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const { setCategory } = productsSlice.actions;

//slice
export const selectAllProducts = (state) => {
  return state.products.productsArray;
};

export const selectProductById = (state,id) => {
  return state.products.productsArray.find(
    (product) => product.id === id
  );
};

export const selectProductByCategory = (state, category) =>
  category === "All"
    ? state.products.productsArray
    : state.products.productsArray.filter(
        (product) => product.category === category
      );

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
