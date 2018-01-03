import { ADD_PLACE, DELETE_PLACE} from "../actions/actionTypes";
import PlaceImage from "../../assets/puppy.jpg";

const INITIAL_STATE = {
    places: []
}

const placeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.payload,
                    image: PlaceImage
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                })
            };
        default:
            return state;
    };
};


export default placeReducer;