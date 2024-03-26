import { PRODUCTS } from "../../app/shared/PRODUCTS";

export const selectAllProducts = () => {
    return PRODUCTS;
};

export const selectRandomProduct = () => {
    return PRODUCTS[Math.floor(PRODUCTS.length * Math.random())];
};