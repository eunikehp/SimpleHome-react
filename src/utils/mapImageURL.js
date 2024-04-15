// import { baseUrl } from "../app/shared/baseUrl";

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            // image: baseUrl + item.image
            image: require("../app/assets/img/" + item.image)
        };
    });
};