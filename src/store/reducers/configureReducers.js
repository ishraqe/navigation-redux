import { combineReducers, createStore } from "redux";
import placeReducer from "./placeReducers";


const rootReducers = combineReducers({
    places: placeReducer
});

const configureStore = () => {
    return createStore(rootReducers);
};

export default configureStore;