import {ColorActionTypes, ColorListActionTypes} from "./ColorActions";

export const ColorReducers = (state = {}, action) => {
    switch(action.type) {
        case ColorActionTypes.RATE_COLOR:
            const color = {...state};

            color.rating = action.rating;

            return color;
        default:
            return {...state};
    }
}

export const ColorListReducers = (state = [], action) => {
    const newState = [...state];

    switch(action.type) {
        case ColorListActionTypes.ADD_COLOR:
            return [
                ...newState,
                action.color
            ];
        case ColorListActionTypes.REMOVE_COLOR:
            return newState.filter((item) => item.id !== action.id);
        default:
            return newState;
    }
}
