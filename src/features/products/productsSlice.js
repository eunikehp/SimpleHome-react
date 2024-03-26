import { PRODUCTS } from "../../app/shared/PRODUCTS";

export const selectAllProducts = () => {
    return PRODUCTS;
};

export const selectRandomProduct = () => {
    return PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)]
}