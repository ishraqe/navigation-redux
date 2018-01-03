import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";

export const add_place  = (placename) => {
    return {
        type: ADD_PLACE,
        payload: placename
    };
};

export const delete_place = (key) => {
    return {
        type : DELETE_PLACE,
        placeKey: key
    };
};

